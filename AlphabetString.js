// Write a js func that returns a passed stringwith letters in alphabetical order

function alphaCheck(str){
    let getStr = str.split('').sort().join('')
    return getStr;
}   

// console.log(alphaCheck('Alpha'));

function splitCheck(str){
    // let strArr = str;
    let retVal=[];
    for(let i = 0; i<str.length; i++){
         retVal.push(str[i]);
    }
    return retVal;
}

console.log(splitCheck('Doctor'));