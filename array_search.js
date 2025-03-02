let data = [20,40,60,5,10,70,80,99];
let item = 70;

// for(i=0;i<data.length-1;i++){
//     //console.log(data[i])
//     if(data[i]===item){
//         index=i;
//         break;
//     }
    
// }

for(i=0;i<data.length-1;i++){
    if(data[i]===item){
        index=i;
        break;
    }
}
//console.log(index);
console.log(`number=${data[i]} , index of that number=${index}`);
