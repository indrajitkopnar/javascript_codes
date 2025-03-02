//node output.js

// for(var i=0; i<3; i++){
//     setTimeout(() => console.log(i),1)
// }/*.................//output = 3,3,3*/

// for(let i=0; i<3; i++){
//     setTimeout(() => console.log(i),1)
// }............output = 0,1,2

// var x;
// var x = 10;
// console.log(x);  ......output = 10                            // node output.js

// let number = 0;
// console.log(number++);//0
// console.log(++number);//2
// console.log(number++);//2
// console.log(number);//3

// let data = 1+2+"5"; //output=35
// console.log(typeof data); // string


// console.log(typeof 3+4+5); // output = number45

// console.log(typeof []);      // node output.js           output = object

// console.log([]==[]); //false-because both the arrays having different memory location

// (()=>{
//     let x = (y=10);
    
// })
// console.log(typeof x);         output = undefined (typeof y is number)


// console.warn(typeof NaN); //number                  // node output.js (Nan-not a number)

// let data = (10 - -10); //output-20
// console.log(data);


// const set = new Set([11,2,3,4,4,4,5,5]); //output = Set(5) { 11, 2, 3, 4, 5 }
// console.log(set);

// let a =31;
// if(a%2==0){
//     console.log("a is even")
// }else{
//     console.log("a is odd")
// }

//map will always return something where forEach will not return anything-that's the difference;

// let c = 3**3;
// console.log(c);............output - 27;      node output.js


// let a = 2;
// setTimeout(()=>{
//     console.log(a)
// },0)
// a=100;                  // output is - 100;      node output.js

// let a =2;
// let A =30;
// console.log(A);//30
// console.log(a);//2


// let a = 1;
// let b = 2;
// console.log(--b === a);  //output = true  (1 is equal to 1)                              // node output.js


// let employee = [{ id: 66, name: "indra", salary: 5000 }];
// console.log(employee);

// function add(Employee) {
//   employee.push(Employee);
// }

// // add({ id: 83, name: "indrajit", salary: 6000 });


// class calculations{
//     constructor(a,b,operation){
//         this.a=a;
//         this.b=b;
//         this.operation=operation;
//     }
//     calculate(){
//         switch (this.operation){
//             case 'add':
//                 return this.a+this.b;

//                 case 'substract':
//                     return this.a-this.b;

//                     case 'multiplication':
//                         return this.a*this.b;
//                         case 'divide':
//                             if(this.b!==0){
//                                 return this.a/this.b
//                             }else{
//                                 "cannot divide by zero";
//                             }
//                             default:"invalid operation"
//         }
//     }

// }
// const calculator = new calculations(5,3,'add');
// console.log(calculator.calculate());

// const calculator1 = new calculations(5,3,'substract');
// console.log(calculator1.calculate());

// const calculator2 = new calculations(5,3,'multiplication');
// console.log(calculator2.calculate());

// const calculator3 = new calculations(5,3,'divide');
// console.log(calculator3.calculate());

// function modifyArray(arr, callback) {
//     // do something to arr here
//     arr.push(100);
//     // then execute the callback function that was passed
//     callback();
//   }
  
//   var arr = [1, 2, 3, 4, 5];
  
//   modifyArray(arr, function() {
//     console.log("array has been modified", arr);
//   });



// const reverseString = (str) => {
//     const characters = str.split("");
//     const reverseCharacters = characters.reverse();
//     const reverseStr = reverseCharacters.join("");
//     return reverseStr;
// }
// console.log(reverseString("Welcome to this Javascript Guide!"));



// let employee = [{id:66,name:"indra",salary:5000}]

// console.log(employee);

// function add(Employee){
//     employee.push(Employee);

// }
// (add)({id:83,name:"ik",salary:6000});


// const express = require ('express');
// const app = express();
// const port = 3000;

// app.get('/',(req,res)=>{
//     res.send("server is started on 3000");
// })

// app.listen(port, () => {
//     console.log(`server is listening on ${port}`);
// });                                                        node output.js



// var arr = [1,2,3,4,5];

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// const arr = [1,9];
// const missArray = [];
// const missValue = (str) => {
//     const minValue = Math.min(...arr);
//     const maxValue = Math.max(...arr);
//     for(i=minValue;i<maxValue;i++){
//         if(arr.indexOf(i)<0){
//             missArray.push(i);
//         }
//     }
//     return missArray
// }
// console.log(missValue(arr));

// const arr1 = [1,2,3,4,5];
// const addition = (arr) => {
//     return arr1.reduce((pre,cur)=>{
//         return pre+cur;
//     })
// }
// console.log(addition(arr1));

// const arr = [1,2,3,4,5,15];
// const addition1 = (arr) => {
//     return arr.reduce((pre,cur)=>{
//         return pre+cur;
//     })
// }
// console.log(addition1(arr));

// const arr = [1,2,3,4,5,2];
// const multiplication = (arr) => {
//     return arr.reduce((pre,cur)=>{
//         return pre*cur;
//     })
// }
// console.log(multiplication(arr));







// let array = [22,1,44,55,77,88,4,3];
// for(let i = 0; i<array.length;i++){
//     console.log(array[i]);
// }


// function bubbleSort(arr) {
//     var len = arr.length;
//     var swapped;
  
//     do {
//       swapped = false;
  
//       for (var i = 0; i < len - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//           [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//           swapped = true;
//         }
//       }
//     } while (swapped);
  
//     return arr;
//   }
  
//   // Example usage
//   var unsortedArray = [5, 3, 8, 2, 1, 4];
//   var sortedArray = bubbleSort(unsortedArray);
//   console.log(sortedArray);


// var unsortedArray =[5,4,3,2,1,21,22,45];
// var sortedArray = unsortedArray.sort(function(a,b){
//     return a-b;
// })
// console.log(sortedArray);







// function addNumbers(a,b,callback){
//     setTimeout(()=> {
//         const sum = a+b;
//         callback(sum);
//     },1000);
// }

// function handleResult(result){
    
//     console.log(result);
// }

// addNumbers(5,"5",handleResult);



// let name1 ={
//     firstName:"indrajit",
//     lastName:"kopnar",
    
// }

// let printFullName = function () {
//     console.log(this.firstName+ " " + this.lastName);
// }
// printFullName.call(name1);



// let name2 = {
//     firstName:"john",
//     lastName:"snow",
// }

// //function borrowing
// printFullName.call(name2);

// class Calculator {
//     constructor(a,b,operation){
//         this.a = a;
//         this.b = b;
//         this.operation = operation;
//     }
//     calculate(){
//         switch(this.operation){
//             case 'add':
//                 return this.a + this.b;
//                 case 'substract':
//                     return this.a - this.b;
//                     case 'multiply':
//                     return this.a * this.b;
//                     case 'divide':
//                         if(this.b !== 0){
//                             return this.a / this.b
//                         }else{
//                             return 'cannot devide by zero'
//                         }
//                         default:
//                         return 'invalid operation';
//         }
//     }
// }
// const calculator = new Calculator(1,2,'add');
// console.log(calculator.calculate());

// const calculator2 = new Calculator(2,2,'multiply');
// console.log(calculator2.calculate());

// const calculator3 = new Calculator(5,5,'substract');
// console.log(calculator3.calculate());

// const calculate4 = new Calculator(10,5,'divide');
// console.log(calculate4.calculate());



// const arr = [55,12,32,6,1];
// arr.sort((a,b) => (a-b));
// console.log(arr);



// const arr = [55,12,32,6,1];
// arr.sort((a,b) => (b-a));
// console.log(arr);

// console.log(8 + "10"); // 18














 
