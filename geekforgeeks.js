// node geekforgeeks.js

// if(true){
//     let geeks = "geekforgeeks";
    
//     console.log(geeks);
// }

// let x = 20,
// 	y = 'G',
// 	z = "GeeksforGeeks";

// console.log("x: ", x, "\ny:", y, "\nz:", z);              // node geekforgeeks.js

    
// let arr = [1,2,3,4,5];
// console.log(arr);

// let language = new Array(3);
// language[0]="1";
// language[1]="2";
// language[2]=3;
// console.log(language);                                         // node geekforgeeks.js

// const fruits = ['apple','banana','cherry','orange'];
// const index = fruits.indexOf('orange');
// console.log(index);

// const array = [100,20,30,40];
// const index = array.findIndex(num => num < 25);
// console.log(index);


// const numbers = ["one","two","three","four"];
// const index = numbers.findIndex(num => num === "four");
// console.log(index);

// const arraynumbers = [10,20,30,40];
// let index = -1;                                      // node geekforgeeks.js
// for(let i=0; i < arraynumbers.length; i++){
//     if(arraynumbers[i] === 40){
//         index = i;
//         break;
//     }
// }
// console.log(index);                                     // node geekforgeeks.js

// const arr = [1,2,3,4,5,6];
// //const n = 2;
// const n = 4;
// const result = arr.slice(0,n);
// console.log(result);

// const arr = [1,2,3,4,5,6];
// const n = 3;
// const result = [];
// for(let i=0;i<n;i++){
//     result.push(arr[i])
// }
// console.log(result);                                     // node geekforgeeks.js

// const arr = [1,2,3,4,5];
// const n = 2;
// arr.splice(n);
// console.log(arr);

// const originalarr = [1,2,3,4,5];
// const copiedarr = [...originalarr];
// console.log(copiedarr);

// const originalarr = [1,2,3,4,5];
// const copiedarr = originalarr.slice(0);
// console.log(copiedarr);                                         // node geekforgeeks.js

// const arr1 = [1,2,3];
// arr2 = [4,5,6];
// arr3 = [7,8,9];
// arr4 = [10,11,12];
// const arr = [...arr1,...arr2,...arr3,...arr4];
// console.log(arr);


// const arr1 = [1,1,2,2,3,3,4,4];
// const arr2 = [5,5,6,6,7,7,8,8,9,9];
// let arr = [...arr1,...arr2];
// const mergedarr = [...new Set(arr)];
// console.log(mergedarr);

// let city = [
//     "surat",
//     "ahmedabad",
//     "rajkot",
//     "mumbai",
//     "surat",
//     "delhi",
//     "ahmedabad",
//     "anand",
//     "delhi"
// ];

// let uniquescities = [...new Set(city)];
// console.log(uniquescities);                                          node geekforgeeks.js


// let num = [1,2,3,4,5];
// function check(element){
//     for(let i=0;i<num.length;i++){
//         if(num[i]==element){
//             return element + " is present in array";
//         }
//         }
//         return element + " is not present in array";
// }
// console.log(check(8));


// let arr = [12, 25, 31, 23, 75, 81, 100];

// arr.sort(function(a,b){
//     return a-b
// });
// console.log(arr);


// arr.sort(function(a,b){
//     return b-a
// });
// console.log(arr);

// let largArr = new Array();
// let arr = new Array(93, 17, 56, 91, 98,
// 		33, 9, 38, 55, 78, 29, 81, 60);

// findLargest3();

// function findLargest3() {
// 	arr.sort((a, b) => a < b ?
// 		1 : a > b ? -1 : 0);

// 	console.log(arr[0]);
// 	console.log(arr[1]);
// 	console.log(arr[2]);

// 	console.log(arr.slice(0, 3));
// }
//                                                                             //node geekforgeeks.js


// const arrNumbers = [1,2,1,3,4,4,3,5,6,7];
// const duplicates = arrNumbers.filter((ele,index,arr)=>arr.indexOf(ele)!==index);
// console.log(duplicates);


// const arr = [1,2,3,4,5];
// let sum = 0;
// arr.forEach(x => {
//     sum += x; 
// })
// console.log(sum);

// const arrNumber = [1,4,9,18,91];
// const maxFunction=(arr)=>{
//     return arr.reduce(function(pre,cur){
//         return pre>cur?pre:cur
//     })
//     }
//     console.log(maxFunction(arrNumber));




// const arrNumber = [1,4,9,18,91];
// const minFunction=(arr)=>{
//     return arr.reduce(function(pre,cur){
//         return pre<cur?pre:cur
//     })
//     }
//     console.log(minFunction(arrNumber));                                 //node geekforgeeks.js




