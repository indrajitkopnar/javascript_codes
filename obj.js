// const str = 'kndraakjtt';
// const obj = {};
// const repeated = [];
// const notRepeated = [];

// for(let i=0; i < str.length; i++){
//     if(str[i] in  obj) {
//         obj[str[i]] = obj[str[i]] + 1;
//     }else{
//         obj[str[i]] = 1;
//     }

//     // if(obj[str[i]]>1){
//     //     repeated.push(str[i])
//     // }
//     //     else if(repeated != i){

//     //         notRepeated.push(str[i])
//     //     }
    
// }
// console.log(obj);
// // console.log(repeated);
// // console.log(notRepeated);




// const arr = [1,2,3,4];
// const multiply = arr.reduce((preValue,nextValue) => preValue*nextValue);
// console.log(multiply)

// const multiply = (numberString) => {
//     return new Promise((resolve, reject) => {
//         const newResult = numberString.map(data => {
//     return new Promise((innerResolve) => {
//         setTimeout(()=>{
//             innerResolve(data * 2);
//         },2000)
//     });
//         });
  
//         Promise.all((newResult))
//         .then(resultArray => {
//             resolve(resultArray);
//         })
//         .catch(error => {
//             reject(error)
//         });
//     });
// }
// const numberString = [1,2,3,4,5];
// multiply(numberString)
// .then(result => {
//     console.log(result)
// })
// .catch(error => {
//     console.log(error)
// })










// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const mergedArr = [...arr1,...arr2];
// console.log(mergedArr);



// function sum(...Arguments){
//     let total=0;
//     for(const args of Arguments){
//         total+=args;
//     }
//     return total
// }
// console.log(sum(4,4,4));









// function isPalindrome(num) {
//     const strNum = num.toString();
//     const reversedStr = strNum.split('').reverse().join('');
//     return strNum === reversedStr;
// }
// console.log(isPalindrome(2311));


// function isPalindrome(num){
//     const strNum = num.toString();
//     const rvrsStr = strNum.split('').reverse().join('');
//     return strNum === rvrsStr;
// }
// console.log(isPalindrome(121));


// function first(){
//     setTimeout(function(){
//              console.log('first func called')
//     },1000)

// }

// function second(){
//     console.log('second')
// }

// second();
// first();




// let user = {
//     name:'john',
//     yearOfBirth:1989,
//     isMarried:true,
//     calculateAge:function(yearOfBirth){
//         return 2024 - yearOfBirth
//     }
// };

// let name = user.name;
// let age = user.calculateAge(1989);
// console.log(age);


// let student = ['john',28,'male',12345,true];
// console.log(student);


// let names = ['john','mark','merry','steve'];
// names.shift();
// // shift()
// // pop()
// // push()
// console.log(names);




// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// Function to find the next prime number after a given number
function findNextPrime(num) {
    let next = num + 1;
    while (!isPrime(next)) {
        next++;
    }
    return next;
}

// Function to find the median of an array
function median(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const len = sorted.length;
    if (len % 2 === 0) {
        return (sorted[len / 2 - 1] + sorted[len / 2]) / 2;
    } else {
        return sorted[Math.floor(len / 2)];
    }
}

// Function to find numbers between input and next prime, and calculate median
function findMedianWithNextPrime(num) {
    const nextPrime = findNextPrime(num);
    const numbers = [];
    for (let i = num; i <= nextPrime; i++) {
        numbers.push(i);
    }
    const result = median(numbers);
    return result;
}

// Example usage
const inputNumber = 9;
const medianResult = findMedianWithNextPrime(inputNumber);
console.log("Median of numbers between", inputNumber, "and the next prime number:", medianResult);












  