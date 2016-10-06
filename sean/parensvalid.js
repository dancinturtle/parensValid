function parensValid(str){
	var count = 0;
	for (var i=0; i<str.length; i++){
		if (str[i] === '('){
			count ++;
		}
		else if (str[i] === ')'){
			count --;
		}
			if (count < 0){
				return false;
			}
	}
	if (count == 0){
		return true;
	}
	else {
		return false;
	}
}


	function bracesValid(str){
	  var arr = [];
	  for (var i = 0; i < str.length; i++){
	  	
	  	if (str[i] === '(' || str[i] ==='[' || str[i] === '{'){
	 		arr.push(str[i]);
	  	} //--close of first if 
	  	

	  	else if (str[i] === ')'){
	  		if (arr[arr.length-1] =='('){
	  			arr.pop(arr[arr.length-1])
	  		}//--close of second if
	  		else {
	  			return false;
	  		}//--close of first else
	  	}//--close of first else if	
	  	

	  	else if (str[i] === ']'){
	  		if (arr[arr.length-1] =='['){
	  			arr.pop(arr[arr.length-1])
	  		}
	  		else {
	  			return false;
	  		}
	  	}	
	  	

	  	else if (str[i] === '}'){
	  		if (arr[arr.length-1] =='{'){
	  			arr.pop(arr[arr.length-1])
	  		}
	  		else {
	  			return false;
	  		}
		}

	  }	

	  	if (arr.length !=0){
	  	return false;
	  	}
	  	else{
	  		return true;
	  	}
		
	}

	console.log(bracesValid(']({})'))





