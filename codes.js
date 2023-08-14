// node codes.js

//console.log(true + false);// 1+0=1...output=1

//var a = (2,3,5);
//console.log(a);// 5....left to right...returns last value

// const data = ["i","n","k"];
// const [,,thirdValue] = data;// comma separating the values
// console.log(thirdValue); //output = k

// for(let i=0; i<5;i++){
//     setTimeout(
//         ()=>{
//             console.log(i)
//         }
//     ,1000)
// } //....,0,1,2,3,4,5


// for(var i=0;i<5;i++){
//     setTimeout(
//         () => {console.log(i)}
//    ,1000 )
// } //.....5,5,5,5,5

// function doSomethingAsync(callback) {
//     setTimeout(function () {
//       console.log("Async operation complete.");
//       callback();
//     }, 2000);
//   }
  
//   function onComplete() {
//     console.log("Callback executed.");
//   }
//   doSomethingAsync(onComplete);

// function doSomethingAsync(callback){
//     setTimeout(function () {
//         console.log("asynch operation complete");
//         callback();
//     },1000)
// }

// function onComplete(){
//     console.log("callback executed");
// }
// doSomethingAsync(onComplete);


// const head = [1,1,1,2,3];
// val = 1;
// const remainingEle = [];
// function removeSimilarEle(){
// for(let i=0;i<head.length;i++){
//     if(head[i] !== val){
//         remainingEle.push(head[i])
//     }
// }
// return remainingEle;
// }
// console.log(removeSimilarEle());



// const head = [1,1,1,2,3];
// const remainingEle = [];

// function removeSimilarEle(){
// for(let i=0;i<head.length;i++){
//     if(head[i] === head[i+1]){
//        continue;
//     }
//     remainingEle.push(head[i])
// }
// return remainingEle;
// }
// console.log(removeSimilarEle());

// const head = [1, 1, 1, 2, 3];
// const remainingEle = [];

// function removeSimilarEle() {
//   // Loop through the 'head' array
//   for (let i = 0; i < head.length; i++) {
//     const element = head[i];
//     const count = head.filter(item => item === element).length;

//     // If the count is 1, it means the element occurs only once, so add it to 'remainingEle'
//     if (count === 1) {
//       remainingEle.push(element);
//     }
//   }

//   return remainingEle;
// }

// console.log(removeSimilarEle());


// const nums = [2,5,1,3,4,7];
// console.log([nums[0],nums[3],nums[1],nums[4],nums[2],nums[5]]);


// const arr = [1,2,3,4,5];
// function iterateArray(){
//     for(i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }
// iterateArray();

// function sum (a,b){
//     return a+b;
// }
// console.log(sum(10,15));

// const arr = [1,2,3,4,5,6];

// function calculatorMultipleTen(arr = [], callback){
//     const ans = [];

// for(let i =0; i<arr.length;i++){
    
//     ans.push(callback(arr[i]));
// }
// console.log(ans);
// }

// calculatorMultipleTen(arr,(a) => a*10);
// calculatorMultipleTen(arr,(a) => a/10);






// const arr = [1,2,3,4,5,6];

// function multiByTen(arr=[],callback){
//     const ans = [];

//     for(let i=0;i<arr.length;i++){
//         ans.push(callback(arr[i]));
//     }
//     console.log(ans)
// }
// multiByTen(arr, (a) => a+10);
// multiByTen(arr,(a) => a*10);

// const a = new Promise((resolve,reject) => {
//     let success = true;

//     if(success) resolve("promise fulfilled")
//     else reject("some technical error")
// });

// a.then((parameter) => {
// console.log(parameter)
// }).catch((error)=>{
//     console.log(error)
// });


// const arr = [];

// const fetchData = (arr=[]) => {
//     return new Promise((resolve,reject) => {

//         setTimeout(()=>{
//             arr.push({name:"indra"})

//             if(arr.length>0) resolve ("data fetched")
//             else reject("some technical error");
//                 },2000)
//                })
//               };
//               fetchData(arr)
//               .then((message)=>console.log(message))
//               .catch(()=>console.log(message));


// class solution {
  
//   factOfNumber(number){
//   let factorial = 1;
//   for(let i=2;i<=number;i++){
//     factorial *= i;
//   }
//   return factorial;
// }
// }
// const solution1 = new solution();
// console.log(solution1.factOfNumber(5));

// function findFixedPoint(arr) {
//   const fixedPoints = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === i) {
//       fixedPoints.push(i);
//     }
//   }

//   return fixedPoints;
// }

// // Example usage:

// const arr = [-2, 0, 2, 3, 6, 7, 9];
// const fixedPoints = findFixedPoint(arr);
// console.log(fixedPoints);





// const arr = [15, 6, 2, 12, 4];
// const element = [];

// function findSimilarElementAsIndex() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === i) {
//       element.push(i);
//     }
//   }
//   return element;
// }

// console.log(findSimilarElementAsIndex());

// const arr = [1, 2, 3, 4];

// function sumOfArray() {
//   let addition = 0;
//   for (let i = 0; i < arr.length; i++) {
//     addition += arr[i];
//   }
//   return addition;
// }

// console.log(sumOfArray()); // Output: 10


// const arr = [1,2,3,4];

// function sumOfArray(){
//   let sum = 0;
// for(let i=0;i<arr.length;i++){
//   sum += arr[i];
// }
// return sum;
// }
// console.log(sumOfArray());



// const arr = [1,2,3,4];

// function sumOfArray(){
//   let sum = 0;
// for(let i=0;i<arr.length;i++){
//   sum = arr[i] + i + sum;
// }
// return sum;
// }
// console.log(sumOfArray()); //output = 16


// const arr = [11,12,13,14,15,16,17];
// function printAlternateElements(){
//   for(i=0;i<arr.length;i+=2){
//     console.log(arr[i])

//   }
// }
// printAlternateElements();

// const value = 1_00_000;
// console.log(value);//output=100000

// const arr = [1,2,3,4,5,6,7,8,9];
// for(let i=0;i<arr.length;i+=2){
//   console.log(arr[i]);
// }//output = [1,3,5,7,9]


// const arr = [55,44,66,787,901,47,67];
// indexOfElements = [];
// function printIndexOfElements(){
// for(i=0;i<arr.length;i++){
//   const element = arr[i];
//   indexOfElements.push(`${element}=${i}`);

// }
// return indexOfElements;
// }
// console.log(printIndexOfElements());

/****************************************************************************** */
// const arr = [55,44,66,787,901,47,67];
// indexOfElements = [];
// function printIndexOfElements(){
//   for(i=0;i<arr.length;i++){
//   const element = arr[i];
//   indexOfElements.push(`${element}=${i}`)

//   }
//   return indexOfElements;
// }
// console.log(printIndexOfElements());

/*********************************************************************************************** */


//     const names = [ "Geek", "Geeks", "Geeksfor","GeeksforGeek", "GeeksforGeeks" ];
//     let longestname = "";
//     for(i=0;i<names.length;i++){
//         if(names[i].length>longestname.length){
//             longestname = names[i];
//         }
//     }
// console.log(longestname);

// const arr = [1,2,3,4,5]
// k = 3;
// function indexOfK(){for(i=0;i<arr.length;i++){
//     if(k === arr[i]){
//         return i;
//     }
// }
// }
// console.log(indexOfK());

// class MyClass {
//     constructor(arr, k) {
//       this.arr = arr;
//       this.k = k;
//     }
  
//     indexOfK() {
//       for (let i = 0; i < this.arr.length; i++) {
//         if (this.k === this.arr[i]) {
//           return i;
//         }
//       }
//       return -1; // Return -1 if the element is not found in the array.
//     }
//   }
  
//   const arr = [1, 2, 3, 4, 5];
//   const k = 3;
//   const myClassInstance = new MyClass(arr, k);
//   console.log(myClassInstance.indexOfK());


// const arr = [1,2,3,4];
// const x = 1;
// function indexOfX(){
//     for(i=0;i<arr.length;i++){
//         if(x === arr[i]){
//             return i;
//         }
//     }
// }
// console.log(indexOfX());


// const arr = [3, 2, 1, 56, 10000, 167];

// const maxElement = Math.max(...arr);
// const minElement = Math.min(...arr);

// console.log(maxElement, minElement);




// const arr = [3, 2, 1, 56, 10000, 167];

// // Initialize max and min variables to the first element of the array
// let maxElement = arr[0];
// let minElement = arr[0];

// // Loop through the array and update max and min variables accordingly
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxElement) {
//     maxElement = arr[i];
//   }
  
//   if (arr[i] < minElement) {
//     minElement = arr[i];
//   }
// }

// console.log("Maximum Element:", maxElement); // Output: Maximum Element: 10000
// console.log("Minimum Element:", minElement); // Output: Minimum Element: 1




/*////////////////////////*

// const arr = [1,0,1,1,0];
// let zero = 0;
// let one = 1;
// let containerForZero = [];
// containerForOne = [];

// for(let i=0;i<arr.length;i++){
//   if(arr[i] === 0){
//      containerForZero.push(arr[i]);
//   }
//   if(arr[i] === 1 ){
//     containerForOne.push(arr[i])
//   }
 
// }
// let finalContainer = containerForZero.concat(containerForOne);
// console.log(finalContainer);















//*//*****- Write a function called lucky_ten which takes an array of integers and returns true if ///**** */
//*//any three consecutive elements sum to 10//**/// */



// const arr = [1, 2, 3, 4, 5,5];
// const arr2 = [];
// const sum = 10;

// function lucky_ten() {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr[i] + arr2[j] === sum) {
//         return [arr[i], arr2[j]];
//       }
//     }
//   }
//  return arr[i];
// }

// console.log(lucky_ten());



//anagram strings

// function areAnagrams(str1, str2) {
//   // Remove any non-alphanumeric characters and convert to lowercase
//   const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//   // Sort the characters of both strings
//   const sortedStr1 = cleanStr1.split('').sort().join('');
//   const sortedStr2 = cleanStr2.split('').sort().join('');

//   // Compare the sorted strings
//   return sortedStr1 === sortedStr2;
// }

// // Test the function
// const string1 = "listen";
// const string2 = "silent";
// console.log(areAnagrams(string1, string2)); // Output: true


//console.log(true + 'indrajit');//trueindrajit

// function findThreeElementsForSum10(arr) {
//     const targetSum = 10;
//     const result = [];
  
//     for (let i = 0; i < arr.length - 2; i++) {
//       for (let j = i + 1; j < arr.length - 1; j++) {
//         for (let k = j + 1; k < arr.length; k++) {
//           if (arr[i] + arr[j] + arr[k] === targetSum) {
//             result.push([arr[i], arr[j], arr[k]]);
//           }
//         }
//       }
//     }
  
//     return result;
//   }
  
//   const arr = [1, 2, 3, 4, 5, 5, 6, 7];
//   const threeElements = findThreeElementsForSum10(arr);
//   console.log(threeElements);


// function findFourElementsForSum10(arr) {
//     const targetSum = 10;
//     const result = [];
  
//     for (let i = 0; i < arr.length - 3; i++) {
//       for (let j = i + 1; j < arr.length - 2; j++) {
//         for (let k = j + 1; k < arr.length - 1; k++) {
//           for (let l = k + 1; l < arr.length; l++) {
//             if (arr[i] + arr[j] + arr[k] + arr[l] === targetSum) {
//               result.push([arr[i], arr[j], arr[k], arr[l]]);
//             }
//           }
//         }
//       }
//     }
  
//     return result;
//   }
  
//   const arr = [1, 2, 3, 4, 5, 5, 6, 7];
//   const fourElements = findFourElementsForSum10(arr);
//   console.log(fourElements);

// const arr = [8, 7, 56, 90];
// let maxValue = arr[0];
// let minValue = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i] > maxValue){
//         maxValue = arr[i]
//     }
//         if(arr[i]<minValue){
//             minValue = arr[i]

//         }
    
// }
// console.log(minValue);
// console.log(maxValue);



// const arr = [5, 3, 2, 4, 1];
// multiplication = 1;

// for(let i=0;i<arr.length;i++){
//     multiplication =  arr[i] * multiplication;
    
// }
// console.log(multiplication);


// (function(){
//     var arrayNumb = [2, 8, 15, 16, 23, 42];
//     arrayNumb.sort();
//     console.log(arrayNumb);
//     })(); immediately invoked function expression(iife)




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


// const arrNumbers = [1,2,5,68,91];
// const maxFunction = (arr) => {
//     return arr.reduce(function(previousNumber,currentNumber){
//         return previousNumber>currentNumber?previousNumber:currentNumber
//     })
// }
// console.log(maxFunction(arrNumbers));//91....(largest number)


// const arrNumbers = [1, 2, 5, 8, 9, 2, 1, 4, 4];


// const duplicates = arrNumbers.filter((currentElement, currentIndex, array) => {
//   return array.indexOf(currentElement) !== currentIndex;
// });

// console.log(duplicates);


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


// const arr = [1, 7, 3];
// let missingElements = [];

// // Find the minimum and maximum values in the array
// let min = arr[0];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// // Find the missing numbers
// for (let num = min; num <= max; num++) {
//   if (!arr.includes(num)) {
//     missingElements.push(num);
//   }
// }

// console.log("Missing numbers:", missingElements);


// function isBinarySequence(str) {
  
//   for (let i = 0; i < str.length; i++) {
    
//     if (str[i] !== "0" && str[i] !== "1") {
     
//       return false;
//     }
//   }
  
//   return true;
// }

// const str = "1017";
// const result = isBinarySequence(str);
// console.log(result); 

// function checkBinary(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "0" && str[i] !== "1") {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkBinary("101"));

// const str = "indrajit";
// const indexOfElements = [];

// function printIndexOfElements() {
//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     indexOfElements.push(`${element}=${i}`);
//   }
// }

// printIndexOfElements();
// console.log(indexOfElements);



// const names =  ["Geek", "Geeks", "Geeksfor","GeeksforGeek", "GeeksforGeeks"];
// longestName = "";
// for(i=0;i<names.length;i++){
//   if(names[i].length>longestName.length){
//     longestName = names[i];
//   }
// }
// console.log(longestName);


// const number = 5;
// let factorial = 1;
// function findFactorial(){
//     for(i=2;i<=number;i++){
//         factorial *= i;
//     }
//     return factorial;

// }
// const result = findFactorial();
// console.log(result);




// const str = "geeks  for geeks";
// let result = "";
// function removeAllSpaces(){
// for(i=0;i<str.length;i++){
// if(str[i] !== " "){
//     result += str[i]
// }

// }
// }removeAllSpaces()
// console.log(result)



// const nums = [1, 4, 2, 5, 3, 6];
// const n = 3;
// const shuffledArray = shuffle(nums, n);
// console.log(shuffledArray); // Output: [1, 2, 4, 5, 3, 6]



// const arr = [1, 2, 3, 4, 5];
// const total = 9;
// const subarraysWithGivenSum = [];

// function subArrayWithGivenSum() {
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === total) {
//           subarraysWithGivenSum.push([arr[i], arr[j], arr[k]]);
//         }
//       }
//     }
//   }
// }

// subArrayWithGivenSum();

// console.log(subarraysWithGivenSum);


// const arr = [1,2,3,4,5];
// for(i=0;i<arr.length;i++){

//    console.log(arr[i])
// };


const no = 1;
function checkNoIsPositiveOrNegative(){
if(no>0){
    console.log("positive")
}
else if(no==0){
    console.log("no is equal to zero")
}
else
{
    console.log("no is positive")
}
}
checkNoIsPositiveOrNegative() 
 
 