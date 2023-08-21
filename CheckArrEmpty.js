// check array is empty or not and dont reset array
//&& this returns if both conditions are truthy || this returns if one is true

function checkArr(arr){
    if((typeof arr === 'object') && (arr.length > 0)){
        console.log("arr is not an Empty Array");
    }else{
        console.log("arr is an Empty Array");
    }
}

console.log(checkArr([]));