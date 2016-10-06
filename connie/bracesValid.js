function bracesValid(str) {
	var braces = [];
	/* We are first going to loop through the string to find any braces that are are in the string. 
	When we find them, we will store them in a new array.*/
	for(var i = 0; i < str.length; i++) {
		//we need to limit the value of the string to a brace
		if(str[i] === '{' || str[i] === '[' || str[i] === '(' || str[i] === '}' || str[i] === ']' || str[i] === '}') {
			// if the top condition is met, it will check if the current value is open brace.
			// if we have an open brace, we want to put the closing brace into the new array.
			if(str[i] === '{')	
				braces.push('}');
			}
			else if(str[i] === "[") {
				braces.push(']');
			}
			else if(str[i] === "(") {
				braces.push(')');
			}
			// Now we need to check if the value is the same as the one at the end of the array.
			// we want to remove the value if it meets the condition. 
			// By popping the value we will decrease the size of the length of the array. 
			// The array will now be a new length.
			else if(str[i] === braces[braces.length - 1]) {
				braces.pop();
			}
			else {
				// We will return false when there is no more matched values with the string
				// and the array. It will also return false if there are no more open brackets.
				return false;
			}
		}
	}
	// Now we check our length of our new array. If the length is 0, then we found matches
	// for all the open and closing brackets in our string.
	if(braces.length === 0) {
		return true;
	}
	else {
		return false;
	}
}