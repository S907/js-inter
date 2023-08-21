let arr =[1,8,99,3,2,88];

function bubble(){
    for(i=0; i<arr.length;i++){
        for(j=0; j<arr.length;j++){
            // console.log(j);
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
        console.log(arr);
    }
}
console.log(bubble());