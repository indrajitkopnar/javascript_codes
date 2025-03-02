// function displayDigits(iNo) {
    
//     while (iNo != 0) {
//         iNo = iNo / 10;
//        count++
//     }
// }

// function main() {
//     number = 12345; 
//     displayDigits(iNo);
//     return 0; 
// }

// main(); 



function factorial(n){
    if(n===0||n===1){
        return 1;
    }else{
        return n*factorial(n-1)
    }
}
const num = 5;
console.log(factorial(num))









// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Promise 1 resolved');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Promise 2 resolved');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1500, 'Promise 3 resolved');
// });

// // Using Promise.all()
// Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//         console.log('All promises resolved:', values);
//     })
//     .catch((error) => {
//         console.error('At least one promise rejected:', error);
//     });
