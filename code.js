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









