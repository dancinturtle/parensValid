// # parensValid
// Algorithms

// 5. Code expectations:
//     a. Functions typed up neatly for both parensValid and bracesValid
//     b. Comments to explain to someone unfamiliar with your code what it's doing
//     c. Functions are called
//     d. Run your functions in your browser or jsbin or other sandbox to confirm that it works as expected. Try to break it! If you can break it, adjust your code! 
// 6. Push to your repo
// 7. Make a pull request

/* Strategy is to put any opening brace of any kind into an array, and then pop it out if a closing brace comes in the proper order -- but if the order is wrong (eg, a closing of one kind before a closing of a different kind; or an closing before an opening exists), the function will return false. */
/* This function solves for both the parensValid and bracesValid problems.*/

function parendsValidAndBracesValid (str) {

	var braces = [];
	for (var i = 0; i < str.length; i++) {
		/* console.log(str[i]); - Detect each character in order if character is a brace, push it into braces array */
		if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
			braces.push(str[i]);
		/* if a closing of any kind happens before an opening, retur false */
		} else if (braces.length === 0 && str[i] === ")" ){
			return false;
		} else if (braces.length === 0 && str[i] === "]" ){
			console.log('fear');
			return false;			
		} else if (braces.length === 0 && str[i] === "}" ){
			console.log('fear');
			return false;
		/* if the current character isn't a closing brace or an opening, skip */
		} else if (str[i] !== ")" && str[i] !== "]" && str[i] !== "}") {
			continue;
		/* if the current brace closes the last in the braces array, pop the last */
		} else if (braces.length !== 0) {
			if (str[i] === ")" && braces[braces.length - 1] === "(") {
				braces.pop();
			} else if (str[i] === "]" && braces[braces.length - 1] === "[") {
				braces.pop();
			} else if (str[i] === "}" && braces[braces.length - 1] === "{") {
				braces.pop();
			} 
			/* if something weird happend and none of the above conditions apply return false */
			else { return false; }
		}
		// console.log(braces);
	}
	// if we get to the end and there's something left in braces, it's false
	console.log(braces);
	if (braces.length > 0) {
		return false;
	} else {
		return true;
	}
}

console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"));
console.log(bracesValid("D(i{a}l[ t]o)n{e"));