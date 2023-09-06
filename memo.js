/**
 * memoization using vanilla js
 */


let sum = 0;
const nonmemoSum = (n)=>{
    for(let i = 0; i<=n; i++){
        sum=sum+i;
    }
    return sum;
}

const memo = (fun)=>{
    let cache={};
    return function(...args){
        console.log("args",args);
        let n = args[0];
        if(n in cache){
            console.log("cache", cache);
            return cache[n];
        }else{
            console.log("Calculating first time");
            console.log(cache);
            let result=fun(n);
            cache[n]=result;
            return result;
        }
    }
}

const runFunc=memo(nonmemoSum);
console.log(runFunc(5));