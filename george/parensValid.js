function parensvalid(str){
	count=0
	for(var x=0;x<str.length;x++){
		if(count===-1){				//if count===-1 we return false because misplaced closing paretheses
			return false			
		}
		else if(str[x]==="("){		//we check our opening parentheses to add to count
			count+=1
		}
		else if(str[x]===")"){		//this finds out matching closing parentheses
			count-=1
		}	
	}
	if(count==0){					//we check that we have matched each opening parentheses with a closed
		return true
	}
	return false					//if not matched we return false
}

function bracesvalid(str){
	var arr=[]
	for(var x=0;x<str.length;x++){	
        if(str[x]=="("||str[x]=="["||str[x]=="{"||str[x]==")"||str[x]=="]"||str[x]=="}"){ //we only want to check our braces, letters and numbers don't matter
			if(str[x]=="("){				//we iterate through and check if it is an open brace,
				arr.push(")")				//if it is, we push the matching closing brace, so we can compare later
			}
	        else if(str[x]=="["){			
				arr.push("]")
			}
	        else if(str[x]=="{"){
				arr.push("}")
			}
			else if(str[x]===arr[arr.length-1]){		//if it's a closing brace, we check to see if it matches
	            arr.pop()								//the end of our array, if it does we remove it
	        }
	        else{
              console.log("false")			//we ruturn false if it doesn't meet any of the above conditions
	          return false					  
	        }
        }
	}
    if(arr.length===0){						//we have to match each brace or else we return false
      console.log("true")
    }
    else{
      console.log("false")
    }
}
