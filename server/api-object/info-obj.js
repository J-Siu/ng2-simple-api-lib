exports.InfoObj = {
	date() {
		date = new Date();
		return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
	},
	time() {
		date = new Date();
		return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	}
}
