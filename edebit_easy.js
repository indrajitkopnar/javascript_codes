// node edebit_easy.js

// function addition(num) {
	
// 	const nextnum = num+1;
// 	return nextnum;
// 	}
// let result = addition(-5);
// console.log(result);


// function getFirstValue(arr) {
// 	return arr[0];
// 	}
// const myArray = [1,2,3,4];
// const firstValue = getFirstValue(myArray);
// console.log(firstValue);

// function lessThanOrEqualToZero(num) {
	
// 	if(num<=0){
// 		return true
// 	}else{
// 		return false
// 	}
// 	}
// let result = lessThanOrEqualToZero(-1);
// console.log(result);                             // node edebit_easy.js


// function findPerimeter(length, width) {
//     let lenght;
     
//     const perimeter = length*2 + width*2;
//     return perimeter;

// }
// let result = findPerimeter(10,20);
// console.log(result);                           //  // node edebit_easy.js 

// function triArea(base, height) {
	
// 	const aot = base * height / 2;
// 	return aot;
	
// }
// let result = triArea(5,4);
// console.log(result);

// function remainder(x, y) {
	
// 	const rmndr = x%y;
// 	return rmndr;
// 	}
// let result = remainder(3,4);
// console.log(result);



// function squared(b) {
// 	const sqrd = b * b;
// 	return  sqrd;
// }
// let result = squared(4);
// console.log(result);                          // node edebit_easy.js 


// function swap(a, b) {
//     let temp = a;
//         a = b;
//         b = temp;
//         return [a, b]
//     }
//     let result = swap(5,4);
//     console.log(result);

// function lessThan(a, b) {
// 	if(a+b<100){
		
//         console.log("is less than hundred")
// 	}else
// 		{
			
//             console.log("greater than hundred")
// 		}
// }
//let result = lessThan(80,10);
//console.log(result);                         // node edebit_easy.js 

// function addUp(num) {
//     let sum =0;
// 	for(let i=1; i<=num ;i++)
//     {
// 	sum = sum + i;	
// 	}
//     return sum
// }
// 	let result = addUp(5);
// 	console.log(result);

// function minMax(arr){
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     return [min,max]
// }
// let result = minMax([1,2,3,4,5,6]);
// console.log(result);

// function minMax(arr) {
// 	let min = Math.min(...arr);
// 	let max = Math.max(...arr);
// 	return [min,max];
// 	}
// let result = minMax([1,2,3,4,5,6,7]);
// console.log(result);                                     // node edebit_easy.js 
		
// function whichIsLarger(f, g) {
// 	let resultF = f();
// 	let resultG = g();
// 	if(resultF>resultG){
// 		return "f"
// 	}else if(resultG>resultF){
// 		return "g"
// 	}else{
// 		return "neither";
// 	}
// 	}
// let result1 = whichIsLarger(() => 5, () => 10);                // node edebit_easy.js 
// console.log(result1);

// let result2 = whichIsLarger(() => 10, () => 5);
// console.log(result2);

// let result3 = whichIsLarger(() => 3, () => 3);
// console.log(result3);



// function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
  
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   // Example usage                                                            // node edebit_easy.js 
//   console.log(isPrime(5)); // Output: true
//   console.log(isPrime(10)); // Output: false
//   console.log(isPrime(17)); // Output: true
  

// function isPrime(number){
//   if(number<=1){
//     return false;
//   }
//   for(i=2; i<=Math.sqrt(number); i++){
//     if(number % i === 0){
//       return false;
//     }
    
//   }
//   return true;
// }
// console.log(isPrime(17));
// console.log(isPrime(10));
// console.log(isPrime(5));
// console.log(isPrime(3));
// console.log(isPrime(22));


function findRepeatedNumbers(arr) {
    var repeatedNumbers = {};
    
    // Iterate through the array
    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      
      // Check if the number has already been encountered
      if (repeatedNumbers[num]) {
        // If yes, increment the occurrence count and add the current index to the indices array
        repeatedNumbers[num].count++;
        repeatedNumbers[num].indices.push(i);
      } else {
        // If not, initialize the occurrence count to 1 and create an array with the current index
        repeatedNumbers[num] = {
          count: 1,
          indices: [i]
        };
      }
    }
    
    return repeatedNumbers;
  }
  
  // Example usage
  var numbers = [2, 5, 2, 7, 9, 5, 2, 1, 8, 2];
  var result = findRepeatedNumbers(numbers);
  
  // Print the result
  for (var num in result) {
    console.log(`Number ${num} occurs ${result[num].count} time(s) at index(s): ${result[num].indices.join(', ')}`);
  }
  






