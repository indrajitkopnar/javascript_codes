// // // // node hackerrank.js

// // // function performOperation(secondInteger, secondDecimal, secondString) {
// // //     const firstInteger = 4;
// // //     const firstDecimal = 4.0;
// // //     const firstString = 'HackerRank';

// // //     console.log(firstInteger + Number(secondInteger));
// // //     console.log(firstDecimal + Number(secondDecimal));
// // //     console.log(firstString + ' ' + secondString);
// // // }


// // // performOperation(12, 4.32, 'is the best place to learn and practice coding!');


// // function vowelsAndConsonants(s) {
// //     const vowels = [];
// //     const consonants = [];
  
// //     for (let i = 0; i < s.length; i++) {
// //       const char = s[i].toLowerCase();
  
// //       if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
// //         vowels.push(char);
// //       } else {
// //         consonants.push(char);
// //       }
// //     }
  
// //     const result = vowels.concat(consonants);
  
// //     for (let i = 0; i < result.length; i++) {
// //       console.log(result[i]);
// //     }
// //   }
  
// //   vowelsAndConsonants("javascriptloops");
  


// function vowelsAndConsonants(s) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const consonants = [];
  
//     for (let i = 0; i < s.length; i++) {
//       const char = s[i].toLowerCase();
  
//       if (vowels.includes(char)) {
//         console.log(char);
//       } else {
//         consonants.push(char);
//       }
//     }
  
//     for (let i = 0; i < consonants.length; i++) {
//       console.log(consonants[i]);
//     }
//   }
  
//   // Example usage
//   vowelsAndConsonants("javascriptloops");



// function factorialOfNumber(number){
//     let factorial = 1;
//     for(i=2;i<=number;i++){
//         factorial *= i;
//     }
//     return factorial;
// }

// console.log(factorialOfNumber(4));




// function factorialOfNumber(number){
//     let factorial = 1;
//     for(let i=2;i<=number;i++){
//         factorial *= i;
//     }
//     return factorial;
// }
// console.log(factorialOfNumber(6));





// const nums = [0,0,1,1,1,2,2,3,3,4,99];

// function dupEle(){
//     const dupnums = [];
//     for(i=0;i<nums.length;i++){
//         if(dupnums.indexOf(nums[i]) === -1){
//             dupnums.push(nums[i])
//         }
//     }
//     return dupnums;
// }
// console.log(dupEle());



// function factorialOfNumber(num){
//     let fact = 1 ;
//     for(i=2;i<=num;i++){
//         fact *= i ;
//     }
//     return fact;
// }
// console.log(factorialOfNumber(6));



// function factorialOfNumber(num){
//     let fact = 1;
//     for(i=2;i<=num;i++){
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorialOfNumber(6));



// class calculateFactorial {
//     calfact(num){
//         let fact = 1;
//         for(let i=2;i<=num;i++){
//             fact *= i;
//         }
//         return fact;
//     }
// }
// const calculator = new calculateFactorial;
// console.log(calculator.calfact(6));

// const nums = [0,0,1,1,1,2,2,3,3,4,99];

// function dupEle(){
//     const dupnums = [];
//     for(i=0;i<nums.length;i++){
//         if(dupnums.indexOf(nums[i]) === -1){
//             dupnums.push(nums[i])
//         }
//     }
//     return dupnums;
// }
// console.log(dupEle());



// class dupelefind{
//     constructor(nums){
//         this.nums = nums;
//     }
//  dupEle(){
//     const dupele = [];
//     for(let i=0;i<nums.length;i++){
//         if(dupele.indexOf(nums[i]) === -1){
//             dupele.push(nums[i])
//         }
//     }
//     return dupele;
// }
// }
// const nums = [0,0,1,1,1,2,2,3,3,4,99];
// const finder = new dupelefind(nums);
// console.log(finder.dupEle());


// const arr = [1,2,3,4,5,6];

// function additionOfArray(){
//     let addition = 0;
//     for(let i=0;i<arr.length;i++){
//         addition += arr[i];
//     }
//     return addition;
// }
// console.log(additionOfArray())


// const arr = [1,2,3,4,5,6,7]; 
// function addOfArr(){
//     let addition = 0;
//     for(i=0;i<arr.length;i++){
//         addition += arr[i];
//     }
//     return addition;
// }
// console.log(addOfArr());


// const arr = [1,2,3,4,5,6,7];
// function multiOfArr(){
//     let multi = 1;
//     for(let i=0;i<arr.length;i++){
//         multi = multi * arr[i];
//     }
//     return multi;
// }
// console.log(multiOfArr());



// const str = "indrajit";

// function reverseString(){
//     let reverseStr = "";
//     for(let i=str.length-1; i>= 0; i--){
//         reverseStr = reverseStr + str[i];
//     }
//     return reverseStr;
// }
// console.log(reverseString());


// const str1 = "johnsnow";
// function revStr(){
//     let revstring = "";
//     for(let i=str1.length-1; i>=0 ;i--){
//         revstring += str1[i];
//     }
//     return revstring;
// }
// console.log(revStr());



// const num = 54321;

// function reverseNumber() {
//     const numStr = num.toString();
//     let reversedStr = "";

//     for (let i = numStr.length - 1; i >= 0; i--) {
//         reversedStr += numStr[i];
//     }

//     const reversedNum = Number(reversedStr);
//     return reversedNum;
// }

// console.log(reverseNumber());

// const nums = [0,0,1,1,1,2,2,3,3,4,99];
// const val = 1;
// function removeGivenValueElements(){
//     const remainingEle = [];
// for(let i = 0; i<nums.length;i++){
//     if(nums[i] !== val){
//         remainingEle.push(nums[i])
//     }
   
//     }
//     return remainingEle;
// }
// console.log(removeGivenValueElements());

// let x = [1,2];
// let y = x.reverse();
// console.log(x,y);

// let x = [5,4,3,2,1];
// let y = x.reverse();
// console.log(y);

// const nums = [0,1,2,2,3,0,4,2]; 
// const val = 2;
// function removeGivenValueElements(){
//     const remainingEle = [];
//     for(let i=0; i<nums.length;i++){
//         if(nums[i] !== val){
//             remainingEle.push(nums[i])
//         }
//     }
//     return remainingEle;
// }
// console.log(removeGivenValueElements());


// let x = 121;
// let y = x.toString().split('').reverse().join('');             // node hackerrank.js

// if(x.toString() === y){
//     console.log("number is palindrome")
// }else{
//     console.log("not a palindrome");
// }


// let x = 121;
// let y = x.toString().split('').reverse().join('');

// console.log(x.toString() === y);                                // node hackerrank.js

// const arr = [55, 12, 32, 6, 1];

// function sortArray(){
//     return arr.sort((a,b) => a-b)
// }
// console.log(sortArray());











