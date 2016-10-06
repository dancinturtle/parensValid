function braces(str){
  var tempArray=[];
  for (var i=0; i<str.length; i++) {
  if(tempArray.length === 0 && (str[i]=="}" || str[i]==")" || str[i]=="]")) {
    return false
  }
  if (str[i]=="{"){
    tempArray.push("}")
  }
  else if (str[i]=="("){
    tempArray.push(")")
  }
  else if (str[i]=="["){
    tempArray.push("]")
  }
  else if (str[i]=="}"){
    if(str[i]==tempArray[tempArray.length - 1]){
      tempArray.pop();
    }
    else {
      return false
    }
  }
  else if (str[i]==")"){
    if(str[i]==tempArray[tempArray.length - 1]){
      tempArray.pop();
    }
    else {
      return false
    }
  }
  else if (str[i]=="]"){
    if(str[i]==tempArray[tempArray.length - 1]){
      tempArray.pop();
    }
    else {
      return false
    }
  } 
 } //end for loop
  if (tempArray.length ===0){
    return true
  }
  else {
    return false
  }
}

str = "[({})]"

   console.log(braces(str));

