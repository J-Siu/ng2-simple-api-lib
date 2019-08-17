process.env['DEBUG'] = 'express:*';
const path = require('path');

// SimpleApi
const SimpleApi = require('simple-api-express').SimpleApi;
// - Base url for API
const apiDataUrl = '/data';
const apiDemoUrl = '/demo';
const apiErrorUrl = '/error';
const apiInfoUrl = '/info';
// - Create SimpleApi instance
var apiData = new SimpleApi(apiDataUrl); // debug false (default)
var apiDemo = new SimpleApi(apiDemoUrl, true); // enable debug
var apiError = new SimpleApi(apiErrorUrl, true); // enable debug
var apiInfo = new SimpleApi(apiInfoUrl);
// - Register API callback with object
apiData.registerObject(require('./api-object').DataObj);
apiDemo.registerObject(require('./api-object').DemoObj);
apiError.registerObject(require('./api-object').ErrorObj);
apiInfo.registerObject(require('./api-object').InfoObj);
// - Register individual API callback
apiDemo.register('echo2', param => 'echo2:' + param);
// - list registered api
console.log('---');
console.log('apiData.list():' + apiData.list());
console.log('apiError.list():' + apiError.list());
console.log('apiInfo.list():' + apiInfo.list());

// Express
const Ex = require('express');
var ex = {};
ex.app = Ex();
ex.bodyParser = require('body-parser');
ex.compression = require('compression');
ex.morgan = require('morgan');
// Express Constant
ex._const = {};
ex._const.port = 4000;
ex._const.app = path.join(__dirname, '../dist/ng2-simple-api-lib');
ex._const.index = path.join(ex._const.app, '/index.html');
ex.app
	.use(ex.morgan(':method :status :url :response-time ms')) // Log
	.use(ex.compression())
	.use(ex.bodyParser.json())
	// Static route
	.use(Ex.static(ex._const.app))	// APP
	// Enable CROS
	.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	})
	// API handler - post
	// API response handler - post
	.post(path.join(apiDataUrl, '*'), (req, res) => apiData.response(req, res))
	.post(path.join(apiInfoUrl, '*'), (req, res) => apiInfo.response(req, res))
	.post(path.join(apiErrorUrl, '*'), (req, res) => apiError.response(req, res))
	.post(path.join(apiDemoUrl, '*'), (req, res) => {
		// Log request body before process
		console.log(req.body);
		try {
			// Manual handler used, server code responsible to send result and handle error
			// Use manual handler if custom header or custom 404 error are needed
			let result = apiDemo.handler(req);
			// Result must be return in json format
			res.json(result);
		}
		catch (e) {
			// Catch api not found error
			res.status(e.status).end(e.error);
		}
	})
	//
	// Default index route must be set last!!
	//
	.get('*', (req, res) => res.sendFile(ex._const.index))
	// Start server
	.listen(ex._const.port, function () {
		console.log('---');
		console.log('Port: ' + ex._const.port);
		console.log('Root: ' + ex._const.app);
		console.log('Html: ' + ex._const.index);
		console.log('---');
	});
