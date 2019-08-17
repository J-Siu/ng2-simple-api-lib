import {Component, OnInit} from '@angular/core';
import {ApiService} from'./api.service';
import {SimpleApiClient, SimpleApiObj} from 'simple-api-client-ng2';

@Component({
	'selector': 'error-component',
	'template': `
		<h3>{{title}}</h3>
		<h4>Default error handler</h4>
		<p>Following button will make a call to a non-existance api link /demo/notexist.
			 The error is handle through SimpleApiClient default error handler.
			 The default error handler will log the error into the console.</p>
		<p>API Url: /demo/notexist</p>
		<div><button (click)="notExist1()">API not exist(1)</button>Check console</div>
		<h4>Per-call custom error handler</h4>
		<p>Following button will make a call to a non-existance api link /demo/notexist.
			 The error is handled through a custom error handler assigned by the call.
			 This custom error handler will put the error information into errorMsg.</p>
		<p>API Url: /demo/notexist</p>
		<div><button (click)="notExist2()">API not exist(2)</button></div>
		<div>errorMsg: <pre>{{errorMsg}}</pre></div>
		<h4>Server side callback throw error</h4>
		<p>Following button will make a call to api link /error/error,
			 of which the callback will manually throw an error message.
			 The error is handled through a custom error handler assigned by the call.
			 The custom error handler will put the error message into throwMsg.</p>
		<p>API Url: /error/error</p>
		<div><button (click)="apiThrowError()">API throw</button></div>
		<div>throwMsg: {{throwMsg}}</div>
		`
})
export class ErrorComponent implements OnInit {
	title = 'Error Handling';

	apiError: SimpleApiObj;

	reply = '';
	errorMsg = '';
	throwMsg = '';

	constructor(
		private as: ApiService,
		private api: SimpleApiClient) { }

	ngOnInit() {
		this.apiError = this.api.get('/error');
	}

	notExist1() {
		this.as.demo.call(
			'notexist', // api name
			'', // parameter
			r => this.reply = r // result callback
		);
	}

	notExist2() {
		this.as.demo.call(
			'notexist', // api name
			'', // parameter
			r => this.reply = r, // result callback
			e => this.customErrorHandler(e) // error callback
		);
	}

	apiThrowError() {
		this.apiError.call(
			'error',
			'',
			r => this.reply = r,
			e => this.throwMsg = e
		);
	}

	customErrorHandler(e) {
		console.log(e._body);
		this.errorMsg = JSON.stringify(e,null,2);
	}

}
