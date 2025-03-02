//quetions.js

// function sumOfwoNUmbers(a,b){
//     return a+b;
// }
// let sum = sumOfwoNUmbers(3,4)
// console.log(sum);



// function findMaxNumber(arr){
//     return Math.max(...arr);
// }
// let arr = [1,2,499,5,7];
// let maxNumber = findMaxNumber(arr);
// console.log(maxNumber);



// function findMaxNumber(arr){
//     if(arr.length === 0){
//         return undefined;
//     }

//     let maxNumber = arr[0]; // assuming first element is the maximum

//     for(let i=1; i<arr.length;i++){
//         if(arr[i] > maxNumber){
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber;
// }
// let arr = [1,2,88,6,4,9];
// let maxNumber = findMaxNumber(arr);
// console.log(maxNumber);


// function findMinNumber(arr){
//     // if(arr.length === 0){
//     //     return undefined;
//     // }

//     let minNumber = arr[0]; // considering first element is the minimum

//     for(let i=1; i<arr.length;i++){
//         if(arr[i] > minNumber){
//             minNumber = arr[i];
//         }
//     }
//     return minNumber
// }
// let arr = [99,1,2,88,6,4,9];
// let minNumber = findMinNumber(arr);
// console.log(minNumber);




// function isPalindrome(str){
//     return str===str.split("").reverse().join("");
// }
// let str = "level";
// let strRtr = isPalindrome(str);
// console.log(strRtr);




// function isPalindrome(str){
//     str = str.toLowerCase();

//     let start = 0;
//     let end = str.length-1;

//     while(start < end){
//         if(str[start] !== str[end]){
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true;
// }
// let str = "levelhh";
// let strRtr = isPalindrome(str);
// console.log(strRtr);





// const reverseString = (str) => str.split("").reverse().join("");
// let inputstr = "indrajit";
// let reverseStr = reverseString(inputstr);
// console.log(reverseStr);


// const reverseString = (str) => {
//     let reverseStr = "";

//     for(let i=str.length-1; i>=0; i--){
//         reverseStr += str[i];
//     }
//     return reverseStr;
// }
// let inputstr = "tijardni";
// let reverseStr = reverseString(inputstr);
// console.log(reverseStr);


// function filterEvenNumbers(numbers){
//     return numbers.filter(num=>num%2===0)
// }
// let numbers = [1,2,3,4,5,6,7,8];
// let filteredNo = filterEvenNumbers(numbers);
// console.log(filteredNo);




// function filterEvenNumbers(numbers){
//     let evenNumbers = [];

//     for(let i=0; i < numbers.length;i++){
//         if(numbers[i]%2 === 0){
//             evenNumbers.push(numbers[i])
//         }
//     }
//     return evenNumbers;
// }
// let numbers = [1,2,3,4,5,6,7,8];
// let filteredNo = filterEvenNumbers(numbers);
// console.log(filteredNo);




// function factorial(number){
//     if(number === 0 || number === 1){
//         return 1;
//     }else{
//         return number*factorial(number-1)
//     }
// }
// let number = 4;
// let factorialFound = factorial(number);
// console.log(factorialFound);



    // function isPrime(num){
    //     if(num<=1)
    //         return false;
    //     for(let i=2; i<= Math.sqrt(num); i++){
    //         if(num%i===0)
    //         return false;
    //     }
    //     return true;
     
    // }
    // let num = 4;
    // let isItprime = isPrime(num);
    // console.log(isItprime);


    // const arr = [1,2,4,5];
    // const arr2 = [100,34,56,78];
    // let arr3 = [...arr,...arr2];
    // console.log(arr3)


    // let arr1 = [12,34,5,6,7,8,97,34];
    // let [a, b ,...others] = arr1;
    // console.log(a,b,others);




    // function findSecondLargest(arr) {
    //     if (arr.length < 2) {
    //         return "Array should have at least two elements";
    //     }
    
    //     let firstLargest = arr[0];
    //     let secondLargest = arr[1];
    
    //     if (firstLargest < secondLargest) {
    //         [firstLargest, secondLargest] = [secondLargest, firstLargest];
    //     }
    
    //     for (let i = 2; i < arr.length; i++) {
    //         if (arr[i] > firstLargest) {
    //             secondLargest = firstLargest;
    //             firstLargest = arr[i];
    //         } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
    //             secondLargest = arr[i];
    //         }
    //     }
    
    //     return secondLargest;
    // }
    
    // // Example usage:
    // const array = [10, 5, 8, 20, 15];
    // const result = findSecondLargest(array);
    // console.log("Second largest element:", result);
    



// const arr = [11, 2, 4, 55, 67, 89, 45, 99];
// let smallestNumber = arr[0];
// let secondLargest = null;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < smallestNumber) {
//     secondLargest = smallestNumber;
//     smallestNumber = arr[i];
//   } else if (arr[i] > smallestNumber && (arr[i] < secondLargest)) {
//     secondLargest = arr[i];
//   }
// }

// console.log("Smallest Number:", smallestNumber);
// console.log("Second Largest Number:", secondLargest);


// const arr = [1,2,4,56,6];
// for(let i=arr.length-1;i>=0;i--){
//   console.log(arr[i])
// }


// const arr = [1,2,4,56,6];
// for(let i=0; i<arr.length;i++){
//   console.log(arr[i])
// }


const arr = [1,2,3,4,56,78,990];
for(let i=arr.length-1; i>=0; i--){
  console.log(arr[i]);
}
