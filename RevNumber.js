function reverseNumber(num){
    let val = num.toString().split('').reverse().join('');
    return val;
}

// console.log(reverseNumber(21));
function reverseNumber(num){
    let rev=0;
    while(num>0){
        let rem= num%10;
        rev= rev*10+rem;
        console.log("dd",num);
        num= Math.floor(num/10);
        console.log(num);
    }
    return rev;
}
console.log(reverseNumber(599));