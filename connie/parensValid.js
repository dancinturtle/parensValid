function parensValid(str) {
	var count = 0;
	for(var i = 0; i < str.length; i++) {
		if(str[i] === "(") {
			count += 1;
		}
		else if(str[i] === ")") {
			count -= 1;
		}
		if(count === 0) {
			return true;
		}
		else if(count === -1) {
			return false;
		}
		else {
			return false;
		}
	}
};