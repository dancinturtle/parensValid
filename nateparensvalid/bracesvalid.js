function bracesvalid(str){
    var arr = [];
    for (var i = 0; i < str.length; i++){
      if((str[i] == "(")||(str[i] == ")")||(str[i] == "[")||(str[i] == "]")||(str[i] == "{")||(str[i] == "}")){
        if (str[i] == "("){
            arr.push(")");
        }
        else if (str[i] == "{"){
            arr.push("}");
        }
        else if (str[i] == "["){
            arr.push("]");
        }
        else if (str[i] == ")"){
            arr.pop("(");
        }
        else if (str[i] == "}"){
            arr.pop("{");
        }
        else if (str[i] == "]"){
            arr.pop("[");
        }
        else{
            return false;
        }
    if (arr.length == 0){
        return true;
    }
}
}
return false;
}

string = ('({[]})');

if(bracesvalid(string)){
  console.log("true");
}
else{
  console.log("false")
}
