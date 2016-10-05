function parensValid(string){
    var count = 0;
    for(var i=0; i<string.length; i++){
        if (count<0){
            return count
        }
        else if(string[i]=="("){
            count++;
        }
        else if(string[i]==")"){
            count--;
        }
    }
    if(count==0){
        return true 
    }
    else{
        return false
    }
}
console.log(parensValid("abc(d)()"))