// function addition()
// {
// let a =5, b=6;
// c=a+b;
// console.log(c);
// }
// addition()

// const arr = [3,56,6,78,99,45,78];
// let maxNo = arr[0];
// function maxNumber(){
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>maxNo){
//             maxNo = arr[i]

//         }
//     }
//     console.log(maxNo);

// }maxNumber()


// const arr = [45,6,78,9,34,9,45,2,67];
// let minNo = arr[0];
// function minNUmber(){
// for(let i=0; i<arr.length;i++){
//     if(arr[i]<minNo){
//         minNo = arr[i];
//     }
// }
// console.log(minNo);
// }minNUmber()


// function isPalindrome(){
//     return str === str.split().reverse().join();
// }
// let str = 'dada';
// let strRtr = isPalindrome(str);
// console.log(strRtr);







// function isPalindrome(str){
//     return str===str.split("").reverse().join("");
// }
// let str = "indra";
// let strRtr = isPalindrome(str);
// console.log(strRtr);





// function reverseString(){
//     return str = str.split("").reverse().join("");
// }
// let str = 'indrajit';
// let rvrsstr = reverseString(str)
// console.log(rvrsstr);



// const arr = [3,13,11,17,7,8,9,6,2,4,10];
// const evenNumbers = [];
// for(let i=0; i<arr.length;i++){
//     if(arr[i]%2===0){
//         evenNumbers.push(arr[i]);
//     }
// }
// console.log(evenNumbers);


// const arr = [3,13,11,17,7,8,9,6,2,4,10,1];
// const oddNumbers = [];
// for(let i=0; i<arr.length;i++){
//     if(arr[i]%2 !== 0){
//         oddNumbers.push(arr[i])
//     }
// }
// console.log(oddNumbers)


// const num = 6;
// let factorial = 1;
// for(let i=1; i<=num;i++){
//     factorial = factorial * i;
// }
// console.log(factorial);






// const str = 'indrrajitt';
// const obj = {};

// for(let i=0; i < str.length; i++){
//     if(str[i] in  obj) {
//         obj[str[i]] = obj[str[i]] + 1;
//     }else{
//         obj[str[i]] = 1;
//     }
// }
// console.log(obj);





// const str = 'indrajit';
// let occurence = [];
// for(i=0;i<str.length;i++){
//     console.log(str[i] === str[i])
//     occurence.push(str[i])
    
// }
// console.log(occurence);




// var start = new Date(2024, 1, 5, 11, 0);
// var finish = new Date(2024, 1, 5, 13, 15);
// var totalHours = finish - start;
// totalHours = totalHours/3600000; // milleseconds in one hour
// totalMinutes = totalHours*60;
// console.log('total hours=', totalHours);
// console.log('total minutes=', totalMinutes);


// const arr = [45,67,4,8,77];
// const clonedArr = [...arr];
// console.log(clonedArr)



// let sum = 0;
// const num = [1,2,4,6,7,8];
// num.forEach((num => {
//     sum = sum + num;
// }));    
// console.log(sum);


// const num = [1,2,3,4,5];
// let double = num.map((num) => {
//     return num*2;
// })
// console.log(double);




// const objects = [
//     {a:1, b:2},
//     {a:3,b:4},
//     {a:5,b:6}
// ]
// let onlyb = objects.map((objects) => {
//     return objects.b;
// })
// console.log(onlyb)




// const objects = [
//     {flag:1, a:1},
//     {flag:0, a:2},
//     {flag:1, a:3}
// ]
// objects.find((objects) => {
//     if(objects.flag === 0){
//         console.log(objects.flag , objects.a);
//     }
// })


// let k = { Name: 'gfg', Country: 'India' };
// let k0 = new Set()
// let k1 = [1, 2, 3];
// let k2 = "hello";
// let k3 = null;
// let k4 = undefined;
// console.log(typeof k, k2, k0,k3,k4,k1);



// let aar = [1,2,3,1,2,3,4];
// uniq = [...new Set(aar)]
// console.log(uniq);


// let arr = [1, 2, 3, 5, 4];
// [arr[3], arr[4]] = [arr[4], arr[3]];
// console.log(arr);


// let arr = [22, 65, 745, 51, 39];
// let max = arr[0];
// for(let i=0; i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max)


// const sumMatrix = (mat) => {
//     let sum = 0;

//     mat.forEach((row) => {
//         row.forEach((cell) => {
//             sum += cell;
//         })
//     })
//     return sum;
// }
// const matrix = [
//     [11,2,3],
//     [4,15,6],
//     [7,8,19]
// ]
// const result = sumMatrix(matrix);
// console.log(result);



// const sumMatrix = (matrix) => {
//     let sum = 0;

//     for(let i=0; i<matrix.length;i++){
//         for(let j=0; j<matrix[i].length;j++){
//             sum += matrix[i][j];
//         }
//     }
//     return sum;
// }
// const matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// const result = sumMatrix(matrix);
// console.log(result);


// const arr = [5,6,7,8,9];
// sum = arr.reduce((a,b) => a+b);
// console.log(sum);



// const arr = [5,6,7,8,9];
// let sum = 0;
// for(let i=0; i<arr.length;i++){
//     sum += i;
// }
// console.log(sum);


// {
// let largeArr = [];
// let arr = [93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60];

//     function largest(){
//         largeArr[0]=0;
//         largeArr[1]=0;
//         largeArr[2]=0;
//         largeArr[3]=0;
        
//         for(i=0; i<arr.length;i++){
//             if(arr[i]>largeArr[0]){
//                 largeArr[0]=arr[i];
//             }
//         }

//         for(i=0; i<arr.length;i++){
//             if(arr[i]>largeArr[1]
//             && arr[i] < largeArr[0]){
//         largeArr[1]=arr[i]
//             }
//         }

//         for(i=0; i<arr.length;i++){
//             if(arr[i]>largeArr[2]
//             && arr[i] < largeArr[1]){
//                 largeArr[2]=arr[i];
//             }
//         }

//             for(i=0; i<arr.length;i++){
//                 if(arr[i]>largeArr[3]
//                 && arr[i] < largeArr[2]){
//                     largeArr[3]=arr[i];
//                 }

           
//             }
        
//         console.log(largeArr[0]);
//         console.log(largeArr[1]);
//         console.log(largeArr[2]);
//         console.log(largeArr[3]);
//     }largest();
// }



// function removeDuplicates(arr){
//     return arr.filter((item,index) => {
//         arr.indexOf(item) === index
//     });
//const arr = [5,45,34,67,99,12];
// for(let i=0; i<arr.length;i++){
//     console.log(`${arr[i]} and ${i}`)
// };
// }
// let arr = [1,2,1,2,3];
// console.log(removeDuplicates(arr))


// let array1 = ['k', 'x', 'z', 'l'];
// let array2 = ['k', 'x', 'z','l'];
// function findCommonElementsFromArrays(array1,array2){
//     for(let i=0; i<array1.length;i++){
//     for(let j=0; j<array2.length;j++){
//         if(array1[i] === array2[j]){
//             return true
//         }else{
//             return false;
//         }
//     }
// }

// }
// console.log(findCommonElementsFromArrays(array1,array2))




// function findMinMax() {
//     let arr = [50, 60, 20, 10, 40];
 
//     let minValue = Math.min(...arr);
//     let maxValue = Math.max(...arr);
     
//     console.log("Minimum element is:" + minValue);
//     console.log("Maximum Element is:" + maxValue);
// }
 

// arr = [50, 60, 20, 10, 40];
// function findMinMax() {
//     const minVal = Math.min(...arr);
//     const maxVal = Math.max(...arr);
//    console.log(minVal,maxVal);

// }
// findMinMax()


// const arr = [1,2,3,4,5]
// add = arr.reduce((a,b) => (a+b));
// console.log(add);



// var twoSum = function(nums, target) {
//     for(let i = 0; i <= nums.length; i++){
//         for(let j = 0; j <= nums.length; j++){
//             if(nums[i] + nums[j] == target){
//                 return ([i,j])
//             }
//         }
//     }
// };
// console.log((twoSum([3,5,6],11)))




// function add(nums, target) {
//     seen = new Set(); // Use a Set to efficiently track seen numbers
  
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];
  
//       // Check if the complement has already been seen
//       if (seen.has(complement)) {
//         return [nums[i], complement]; // Return the pair if found
//       }
  
//       // Add the current number to the Set for future checks
//       seen.add(nums[i]);
//     }
  
//     return []; // Return an empty array if no pair is found
//   }
  
//   nums = [2, 7, 11, 15];
//   target = 9;
  
//   const result = add(nums, target);
  
//   if (result.length > 0) {
//     console.log("The numbers that add up to", target, "are:", result[0], "and", result[1]);
//   } else {
//     console.log();
//   }  









// function bubbleSort(array){
//     var done = false;
//     while(!done){
//         done=true;
//         for(var i=1; i<array.length; i+=1){
//             if(array[i-1]>array[i]){
//                 done=false;
//                 var tmp = array[i-1];
//                 array[i-1]=array[i];
//                 array[i]=tmp;
//             }
//         }
//     }
//     return array;
// }

// var numbers = [12,10,15,11,14,13,16];
// bubbleSort(numbers);
// console.log(numbers)



// var items=[
//     { id: 1, name: 'aa' },
//     { id: 1, name: 'bb' },
//     { id: 2, name: 'cc' },
//     { id: 1, name: 'dd' }
// ], 
// newItems = [];
// for (var i =0;i<items.length;i++){
//     newItems[items[i].id - 1] = items[i];
// }
// console.log((JSON.stringify(newItems)));



// const arr = [5,45,34,67,99,12];
// for(let i=0; i<arr.length;i++){
//     console.log(`${arr[i]} and ${i}`)
// };



// function reverseStr(str){
//     return str ==  str.split("").reverse().join("")
// }
// let str = 'madam'
// let rvrsStr = reverseStr(str)
// console.log(rvrsStr)


// function reverseStr(str){
//     return str == str.split("").reverse().join("")
// }
// let str = 'madam';
// let rvrsStr = reverseStr(str);
// console.log(rvrsStr);






// function selectionSort(arr){
//     let n = arr.length;
    

//     for(let i=0; i<n-1; i++){
//         let minIndex = i;
       
    

//     for(let j=i+1; j<n; j++){
//         if(arr[j] < arr[minIndex]){
//             minIndex = j;
            
//         }
//     }

//     if(minIndex !== i){
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
// }

// return arr;

// }

// let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// let sortedArray = selectionSort(unsortedArray);
// console.log(sortedArray); 



const arr = [4, 5, 6, 78, 99, 80, 1, 44];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap the elements
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);  // Output: [1, 4, 5, 6, 44, 78, 80, 99]
