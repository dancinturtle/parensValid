//1
function abc(str){
  var count=0;
  for(var i=0;i<str.length;i++){
    if(count==-1){
      console.log("no");
      return false;
    }
    if(str[i]=="("){
      count++;
    }
    else if(str[i]==")"){
      count--;
    }
  }
  if(count===0){
    console.log("yes");
    return true;
  }
  else
    console.log("no");
    return false;
}

abc('()))');


//2
function hello(str){
  var arr=[];
  
  for(var i=0;i<str.length;i++){
    if(str[i]=="("){
      arr.push(")");}
    else if(str[i]=="["){
      arr.push("]");}
    else if(str[i]==arr[arr.length-1]){
      arr.pop();}
    }
  if(arr.length===0){
    console.log("y");
    return true;}
  else
        console.log("n");
    return false;
  }

hello('([])');