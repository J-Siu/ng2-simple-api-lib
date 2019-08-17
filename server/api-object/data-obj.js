// Helper fucntion

const ranTxt = function (j) {
	var txt = '';
	var alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < j; i++) {
		txt += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
	}

	return txt;
}
const ranNum = function (j) {
	return Math.random() * j;

}

// Export Object
exports.DataObj = {
	obj() {
		return { txt: ranTxt(10), num: ranNum(100) };
	},
	num() {
		return ranNum(100);
	},
	str() {
		return ranTxt(10);
	},
}

// console.log(ranTxt(100));
// console.log(ranNum(100));
