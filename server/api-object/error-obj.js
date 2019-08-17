exports.ErrorObj = {
	error(r) {
		// Throw error within callback will be passed to api client
		console.log('ErrorObj throw error.');
		throw 'ErrorObj throw error.';
	}
}
