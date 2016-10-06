function bracesValid(str){
  var arr=[];
  for (var i=0;i<str.length;i++) {
    if (str[i] == '('){
    arr.push(')');
    }else if (str[i] == '['){
    arr.push(']');
    }else if (str[i] == '{'){
    arr.push('}');
    }else if (str[i] == ')'){
      if (arr[arr.length-1] == ')'){
        arr.pop();
      }else{
        return false;
      }
    } else if (str[i] == '}'){
      if (arr[arr.length-1] == '}'){
        arr.pop();
      }
      else{
        return false;
      }
    }else if (str[i] == ']'){
      if (arr[arr.length-1] == ']')
        arr.pop();
      else
        return false;
    }
  }
  if (arr.length==0){
    return true;
  }else{
    return false;
  }
}
//function ends
// str3='sdr[][{}{e())ioi()'
// console.log(bracesValid(str3))
