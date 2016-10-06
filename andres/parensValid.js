function parensValid(str) {
    var checkValue = 0; // this value will be used to determine if all open and closed parentheses cancel each other out
    for(var i = 0; i < str.length; i++) { // loop through the string to check each character
        if(str[i] == "(") {
            checkValue += 1;
        }
        if(str[i] == ")") {
            checkValue -= 1;
        }
        if(checkValue == -1) { // -1 would mean there is a closing parentheses that was not proceeded by an opening parentheses, no need to continue at that point so return false
            return false;
        }
    }
    if(checkValue == 0) { // the string has been looped through so 0 means either there were no parentheses or they were all opened and closed properly
        return true;
    }
    console.log("too many opens");
    return false; // everything else means there were open parentheses without closing ones (checkValue > 0) so return false
}
str = "(Hello)there()";
console.log(parensValid(str));
