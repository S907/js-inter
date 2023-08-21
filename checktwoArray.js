// Check 2 arrays if they have same value
//Sort without methods
let newEl=77;
let pos=3;
function insertValArr(){
    for(let i=arr.length-1; i>=0; i--){
        if(i>=pos){
            arr[i+1]=arr[i];
            if(i === pos){
                arr[i]=newEl;
            }
        }
    }
    console.log(arr);
}
// console.log(insertValArr());

function removeArr(){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===9){
            let spliced= arr.splice(i,1)
            console.log(spliced);
            console.log(arr);
        }
    }
}
let arr=[8,9,10,78,99,100];
// console.log(removeArr());

//remove Array

function withoutMethod(){
    for(let i=pos; i<arr.length-1; i++){
        console.log(arr[i]);
        arr[i]=arr[i+1]
    }
    arr.length=arr.length-1;
    console.log(arr);
}
console.log(withoutMethod());
