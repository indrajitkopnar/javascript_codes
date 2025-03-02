// let data = [60,30,10,67,40];
// let newEl = 100;
// let position = 2;
// for(let i=data.length-1;i>=0;i--){
//     //console.log(data[i])

//     if(i>=position){
//         data[i+1]=data[i];
//         if(i==position)
//         {
//             data[i]=newEl
//         }
//     }
    
// }
// console.log(data);



let arr = [4,2,5,6,79,0];
let newElement = 50;
let positionInArray = 3;
for(let i=arr.length-1;i>=0;i--){
    if(i>=positionInArray){
        arr[i+1]=arr[i];
        console.log(arr[i])
        if(i==positionInArray){
            arr[i]=newElement
        }
    }
}
console.log(arr);