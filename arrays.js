// node arrays.js


// function func(){
// arr = [77,14,98,65,81];
// arr.splice(2,2);
// console.log(arr);
// }
// func();                                           node arrays.js

// let numArray = "indrajit";
// //console.log(numArray);

// for(let value of numArray){
//     console.log(value);
// }///......i n d r a j i t


// class Calculator{
//     add(a,b){
//         return a+b;
//     }
// }
// const calculator = new Calculator();
// const result = calculator.add(10,20);
// console.log(result);//10+20=30

// var x = 5+10+20;
// console.log(x);     //=35                   //node arrays.js


// myFunction();
// anotherFunction();
// let petName;

// function myFunction(){
//     let petName = "one";
//     console.log(petName);
// }
// function anotherFunction(){
//     let petName = "two";
//     console.log(petName);
// }
// console.log(petName);  //one-two-undefined                         // node arrays.js

// let arr1 = new Array(3);
// arr1[0]=5;
// arr1[1]=6;
// arr1[2]=7;
// console.log(arr1);//6

// let arr = new Array(10,20,30,40,50);
// console.log(arr);

// let arr2 = new Array("indra","javascript");
// console.log(arr2);

// let number_arr = [ 20, 30, 40, 50 ];
// //number_arr.pop();//20,30,40
// //number_arr.unshift(10);//10,20,30,40,50
// number_arr.shift();//30,40,50
// console.log(number_arr);                     //node arrays.js


// let num = [ 20,30,40,50,60,70,80 ];
// let num1 = num.slice(0,3);
// console.log(num1);//20,30,40
// console.log(num);//20,30,40,50,60,70,80



// let num = [ 20,30,40,50,60,70,80 ];
// let num1 = num.concat(6,3);
// console.log(num1);//20,30...6,3


// let str = String(2);
// console.log(typeof str);//string

// function geek() {
// 	let y = Date();
// 	let string = String(y);
// 	console.log(string);
// }
// geek();                                //node arrays.js//...Tue Jul 04 2023 07:43:27 GMT+0530 (India Standard Time)


// const arrNumber = [1,2,8,2,9,8,9,3,3];
// const duplicates = arrNumber.filter((ele,index,arr) => arr.indexOf(ele)!==index);
// console.log(duplicates);//2,8,9,3(repeated elements)



// const arrNumbers = [1,2,5,68,91];
// const maxFunction = (arr) => {
//     return arr.reduce(function(pre,cur){
//         return pre>cur?pre:cur
//     })
// }
// console.log(maxFunction(arrNumbers));//91....(largest number)

// const arrNumbers = [1,2,5,68,91];
// const minFunction = (arr) => {
//     return arr.reduce(function(pre,cur){
//         return pre<cur?pre:cur
//     })
// }
//  console.log(minFunction(arrNumbers));//1....(smallest number)

// const arrNumbers = [1,2,5,68,91];
// const maxFunction = (arr) => {
//     return arr.reduce(function(pre,cur){
//         return pre>cur?pre:cur
//     })
// }
// console.log(maxFunction(arrNumbers)); //91-largest             //node arrays.js


// const arrNumbers = [1,2,5,8,9,2,1,4,4];
// const duplicates = arrNumbers.filter((ele,index,arr) => arr.indexOf(ele)!==index);
// console.log(duplicates);

// const arrNumbers = [1,2,5,8,9,2,1,4,4];
// const maxFunction = (arr) =>{
//     return arr.reduce(function (pre,cur){
//         return pre>cur?pre:cur
//     })
// }
// console.log(maxFunction(arrNumbers)); //9         // node arrays.js

// const arrNumbers = [1,2,3,4,5,99];
// const minFunction = (arr) => {
//     return arr.reduce(function(pre,cur){
//         return pre<cur?pre:cur
//     })
// }
// console.log(minFunction(arrNumbers)); //1                      // node arrays.js

// const intArray = [2,8,9,7];
// const largestValue = (arr) => {
//     firstLargest = Math.max(...arr)
//     index = arr.indexOf(firstLargest)
//     arr.splice(index,1)

//     secondLargest = Math.max(...arr)
//     index = arr.indexOf(secondLargest)
//     arr.splice(index,1)

//     thirdLargest = Math.max(...arr)
//     return thirdLargest
// }
// console.log(largestValue(intArray));//output= 7


// const intArray = [2,8,9,7,7];
// const duplicates = intArray.filter((ele,index,arr) => arr.indexOf(ele)!=index);
// console.log(duplicates);                                            //node arrays.js


// const empArr = [
//     {name:"a",age:25},
//     {name:"b",age:26},
//     {name:"c",age:27},
//     {name:"d",age:28},
//     {name:"e",age:31},
// ]

// // const filteredItems = empArr.filter((item) => {
// //     return item.age<30;
// console.log(filteredItems); 

// const findItems = empArr.find((item) => {
//     return item.age<30;
// })
// console.log(findItems);   //find method returns only one elements which occured at first                            // // node arrays.js

// const arrNum = [1,2,3,6,7,9];
// const missArray = [];
// const missValue = (arr) => {
//     const minValue = Math.min(...arr);
//     const maxValue = Math.max(...arr);
//     for(i=minValue;i<maxValue;i++){
//        if(arr.indexOf(i)<0){
//         missArray.push(i)
//        }
//     }
//     return missArray
// }
// console.log(missValue(arrNum));//missing elements=[4,5,8]



// const numbers = [1,2,3,4,5,6,8,9];
// const even = numbers.filter((item)=>{
//     return item%2===0;
// })

//     const odd = numbers.filter((item)=>{
//         return item%2==!0;
// })
// console.log("even numbers: " + even);
// console.log("odd numbers: "+ odd);                                            // node arrays.js


// const arr1 = [1,2,3,4,5,6,2,7];
// const arr2 = (arr) => {
//     return arr.reduce((pre,cur)=>{
//         return pre+cur
//     })
// }
// console.log(arr2(arr1))//addition of array =30;

// const inputNum = prompt("enter number")
// var fact = 1
// if(inputNum<0){
// console.log("not possible")
// }else{
//     for(i=1;i<=inputNum;i++){
//         fact = fact*i;
//     }
//     console.log(fact)
// }.....................factorial of number


// var number = prompt("enter number");
// if(number == 1){
//     console.log(`${number} is not a prime number`)
// }
// else if(number<1){
//     console.log(`prime number of ${number} is not possible`)
// }
// else{
// for(let i=2;i<number;i++){
//     if(number % i == 0){
//         var result = `${number} is not a prime number`
//         break;
//     }else{
//         var result = `${number} is prime number`
//     }
// }
// console.log(result);                                           // node arrays.js
// }



// const string = prompt("enter string")
// string=string.toLowerCase()
// if(string=='a' || string =='e' || string=='i' || string=='o' || string=='u'){
//     console.log(`${string} is vowel`)}
//     else{
//         console.log(`${string} is not vowel`)
//     }


// var string = prompt("enter string")
// const vowels = ['a','e','i','o','u']
// const countVowels = (str) =>{
//     var count = 0;
//     for(let letters of str.toLowerCase()){
//         if(vowels.includes(letters)){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels(string))

// const reverseString = (str) =>{
//         var characters=str.split("")
//         var reversedCharacters=characters.reverse()
//         var reversedString=reversedCharacters.join("")
//         return reversedString
// }
// console.log(reverseString("indra"));                   //node arrays.js




// const reversedString = (str) => {
//    var characters = str.split("");
//    var reversedCharacters = characters.reverse();
//    var reversedString = reversedCharacters.join("");
//    return reversedString;
// }
// console.log(reversedString("indra"));


// const reverseString = (str) =>{
//     var chracters = str.split("");
//     var reversedCharacters = chracters.reverse();
//     var reverseString = reversedCharacters.join("");
//     return reverseString;
// }
// console.log(reverseString("indrajit"));


// const reverseString = (str) =>{
//     var characters = str.split("");
//     var reverseCharacters = characters.reverse();
//     var reversedString = reverseCharacters.join("");
//     return reversedString;
    
// }
// var str = "MaDaM";
// var reversedString = reverseString(str.toLowerCase())

// if(reversedString==str.toLowerCase()){
//     console.log("is palindrom ")
// }else{
//     console.log("not a palindrome")                      // node arrays.js                
// }


// let a = 7;
// let b = 8;
// let temp=a;
// a=b;
// b=temp
// console.log(`value of a ${a} and value of b ${b}`);

// let a =10; b=20;

// [a,b]=[b,a];

// console.log(`value of a ${a} and value of b ${b}`);

// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const arr = arr1.concat(arr2);
// console.log(arr);                                    //node arrays.js



// function findFactors(number){
//     const factors = [];
//     for(let i=1;i<=number;i++){
//         if(number%i==0){
//             factors.push(i)
//         }
//     }
//     return factors
// }
// const number = 24;
// const factors = findFactors(number);
// console.log(factors);



// var arr1=[1,2,3,4];
// var arr2=[3,1,4,2];
// const isArrSame=arr1.length==arr2.length &&

// arr1.every((curEle)=>{
//     if(arr2.indexOf(curEle)>-1){
//         return (curEle=[arr2.indexOf(curEle)])
//     }
// })

// console.log(isArrSame);            // node arrays.js


// const intArray = [2,8,9,7];
// const largestValue = (arr) => {
//     firstLargest = Math.max(...arr)
//     return firstLargest;
// }
// console.log(largestValue(intArray));//9.....largest number




// console.log("1")
// console.log("2")
//  setTimeout(()=>{
//   console.log("3")
//  }, 0);
//  setTimeout(()=>{
//   console.log("4")
//  }, 1);
//  setTimeout(()=>{
//   console.log("5")
//  }, 2);
//  console.log("6")

// output = 1,2,6,3,4,5


// console.log(typeOf []) //object


// console.log(0 && null) // 0

// console.log("11"==11); //true
// console.log("11"===11); //false


// const arrNumbers = [1,2,5,68,91];
// const MaxNumber = (arr) => {
//     const mxNmbr = Math.max(...arr)
//     return mxNmbr;
// }
// console.log(MaxNumber(arrNumbers));

                 



                                                      



                 







