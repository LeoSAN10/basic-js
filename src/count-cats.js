const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if(!arr) {
  	return 0;
  }

  return arr.reduce((acc, val) => {
  	return acc + val.filter(x => x === '^^').length;
  },0);
  	};