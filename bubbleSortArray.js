// node bubbleSortArray.js

// function bubbleSortDescending(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] < arr[j + 1]) {
//         // Swap elements if they are in the wrong order
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// const numbers = [5, 2, 8, 1, 9];

// // Use the bubbleSortDescending function
// const sortedDescending = bubbleSortDescending(numbers.slice());

// console.log(sortedDescending);




function bubbleSortDescending(arr){
  const n = arr.length;

  for(let i=0; i<n-1;i++){
    for(let j=0; j<n-1-i; j++){
      if(arr[j] < arr[j+1]) {
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1]=temp;
      }
    }
  }

  return arr;
}

const numbers = [5,2,8,1,9];

const sortedDescending = bubbleSortDescending(numbers.slice());
console.log(sortedDescending);

  