// const  s : string = "GeeksForGeeks";
// const x : string = "For";
// function findSubstringIndex(mainStr:string, subStr:string):number {
//   const index = mainStr.indexOf(subStr);
//   return index;
// }
// const result = findSubstringIndex(s, x);
// console.log(result);


// function isRotatedVersion(s1, s2) {
//     if (s1.length !== s2.length) {
//         return false;
//     }
//     var concatenatedString = s1 + s1;
//     return concatenatedString.includes(s2);
// }
// var s1 = "geeksforgeeks";
// var s2 = "forgeeksgeeks";
// var result = isRotatedVersion(s1, s2);
// console.log(result ? "1" : "0");


// let x = 10 ;
// let y = ++x;
// console.log(y++,x); // 11,11


// function sortStringInAscendingOrder(S) {
//     const sortedArray = S.split('').sort();
//     const sortedString = sortedArray.join('');
//     return sortedString;
//   }
  
//   const S = "edcab";
//   const sortedString = sortStringInAscendingOrder(S);
//   console.log(sortedString);

// function findDuplicates(intArray) {
//     const duplicates = [];
  
//     for (let i = 0; i < intArray.length; i++) {
//       const currentElement = intArray[i];
//       const firstIndex = intArray.indexOf(currentElement);
//       const lastIndex = intArray.lastIndexOf(currentElement);
  
//       if (firstIndex !== lastIndex && !duplicates.includes(currentElement)) {
//         duplicates.push(currentElement);
//       }
//     }
  
//     return duplicates;
//   }
  

//   const intArray = [2, 8, 9, 7, 7];
//   const duplicates = findDuplicates(intArray);
//   console.log(duplicates); 
  

// const intArr = [2, 8, 9, 7, 7];
// const duplicates = intArr.filter((ele,index,arr) => arr.indexOf(ele)!=index);
// console.log(duplicates);



// const intArr = [2, 8, 9, 7, 7, 9, 2];
// const duplicates = intArr.filter((ele,index,arr) => arr.indexOf(ele)!=index);
// console.log(duplicates);

// const arr = [99,76,86,1,5,4,2,45];
// arr.sort((a,b) => (a-b))
// console.log(arr);

//const arr = [3, 1, 3, 3, 2];

// function findMajorityElement() {
//   let frequency = {}; // To store the frequency of each element
//   let maxFrequency = 0; // To keep track of the maximum frequency
//   let majorityElement = null; // To store the element with the maximum frequency

//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     frequency[num] = (frequency[num] || 0) + 1; // Increment the frequency count for each element

//     if (frequency[num] > maxFrequency) {
//       maxFrequency = frequency[num];
//       majorityElement = num;
//     }
//   }

//   return majorityElement;
// }

// console.log(findMajorityElement());

// const arr = [1, 2, 3, 4, 5];
// let container = [];
// let evenNumbers = [];
// let oddNumbers = [];

// function multiplyEvenByTwoOddByThree() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers.push(arr[i] * 2); // Multiply even numbers by 2
//     } else {
//       oddNumbers.push(arr[i] * 3); // Multiply odd numbers by 3
//     }
//   }
//   return evenNumbers.concat(oddNumbers); // Concatenate evenNumbers and oddNumbers
// }

// container = multiplyEvenByTwoOddByThree(); // Assign the result of the function call to container
// console.log(container);

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// });

// rl.question("please enter your name: ", (name) => {
//     console.log("you entered: " + name)
//     rl.close();
// });



// let arr = [1,2,3,3,3,4,4,4,5];

// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates(arr));



// let arr = [1,2,3,3,3,4,4,4,5];
// let container = [];
// function printElementsWithIndex(){
//     for(i=0;i<arr.length;i++){
//      const element = arr[i];
//      container.push(`${element}=${i}`)
//     }
//     return container;
    
// }
// console.log(printElementsWithIndex());

// let arr = [1,2,3,4,5];
// let container = [];
// function printElementsWithIndex(){
//     for(i=0;i<arr.length;i++){
//         const element = arr[i];
//         container.push(`${element}=${i}`)
//     }
//     return container;
// }
// console.log(printElementsWithIndex());











// function getLastNElements(arr, n) {
//     if (n >= arr.length) {
//       return arr;
//     }
    
//     return arr.slice(-n);
//   }
  
//   const arr = [1, 2, 3, 4, 5, 6];
//   const n = 3;
  
//   const result = getLastNElements(arr, n);
//   console.log(result);


// const arr = [1,2,3];
// const clonedArr = [...arr];
// console.log(clonedArr);



// let arr = ["one","two","three","four","five","one","two","one"];
// function removeDuplicates(arr){
//     return [...new Set(arr)]
// }
// console.log(removeDuplicates(arr));


// let a,b,c;
// a=2;
// b=3;
// c=a+b;
// console.log(c);


// let x,y,sum;
// x=3;
// y=23;
// sum=x+y;
// console.log(sum);

// function func(){
//     let num=45;
//     console.log(num);
// }
// func();



// let globalVar = "this is global variable";
// function fun(){
//     let localVar = "this is local variable";
//     console.log(globalVar);
//     console.log(localVar);
// }
// fun();


// const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
// console.log(arr1.toString());
// arr1[2] = "Indrajit";
// console.log(arr1.toString());






// const str = "Welcome to this Javascript Guide!";
// function reverseGivenString(){
//         const characters = str.split("");
//         const reverseCharacters = characters.reverse();
//         const reverseStr = reverseCharacters.join("");
//         return reverseStr;
//         }
// console.log(reverseGivenString());



// const str = "Welcome to this Javascript Guide!";
// function reverseGivenString(){
//     let reverseStr = "";
//     for(let i=str.length-1; i>=0; i--){
//         reverseStr = reverseStr + str[i];
//     }
//     return reverseStr;
// }
// console.log(reverseGivenString());

// var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
// arrayList.length=0;
// console.log(arrayList);























// function reverseNumber(num) {
//     let revNum = 0;
//     while (num > 0) {
//       let rem = num % 10;
//       revNum = revNum * 10 + rem;
//       num = Math.floor(num / 10);
//     }
//     return revNum;
//   }
  
//   console.log(reverseNumber(12345)); // Output: 54321



// function isLeapYear(year){
//     return year % 4 === 0 && (year % 100 !==0 || year % 400 ===0)
// }
//   console.log(isLeapYear(2024));
//   console.log(isLeapYear(2023))


// function reverseString(str){
//     return (str.toString().split("").reverse().join(""));
// }
// console.log(reverseString(34834687))


// const numbers = [5, 2, 9, 1, 7];
// numbers.sort((a,b)=>a-b)
// console.log(numbers)


function isLeapYear(year){
    return year%4===0&&(year%100 !==0 || year%400===0)
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2023))

