

const arr = [4,5,67,8,90];
let maxNumber = arr[0];
for(let i=0; i<arr.length;i++){

   

    if(arr[i]>maxNumber){
        maxNumber = arr[i]
    }
       
}
console.log(maxNumber)