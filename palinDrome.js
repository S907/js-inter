// refer
function palCheck(str){
    if(str.length>0){
        let a = str.split('').reverse().join('');
        if(a === str){
            return 'Palindrome'
        }else{
            return "Not Palindrome";
        }
    }
    return;
    
}
console.log(palCheck('not'));

// function palChecker(str){
//     while(str.length>0){
//         for(let i=0; i<str.length; i++){
//             let a
//         }
//     }
// }