function parensvalid(str){
    var count = 0; // we set count to track "(" ")" and start at 0
    for (var i = 0; i < str.length; i++){ //the for loop to work down the string
        if ( count == -1){
            console.log("false");
            return false;           // this checks the first value if its '(' then its false
        }
        if ( str[i] == "(" ){
            count ++;           // we assign '(' to be a positive count
        }
        else if ( str[i] == ")" ){
            count --;           // we assign '(' to be a negative count
        }
    }
    if ( count === 0){          // after the for loop we check if the entire string is true of false
        console.log("true");        // by checking if the value is positive or negative
        return true;                // if count is 0 then the string is true
    }
    else{
        console.log("false");   // if the count is anything, but 0 then the string is false
        return false;
    }
}

parensvalid('(ksf)dks()');
