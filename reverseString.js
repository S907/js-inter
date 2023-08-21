const str='hello how are, you?';
const str2= 'hello how are, you'
//('') this basically takes the single alphabets and pushes into an array
//(' ') this takes the word up until it sees a space and then returns array
const spVal=str2.split(''); 
console.log(spVal);

let getValWords='';
const reverseStr=str.split(' ').forEach(function(word){
    // console.log(word);
    let val= word.split('').reverse().join('');
    getValWords+=val;
    return getValWords;
});

console.log(getValWords);

// Using map and reduce it can be done