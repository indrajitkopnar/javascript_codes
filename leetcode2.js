// node leetcode2.js

function reverseString(str) {
    const characters = str.split("");
    const reverseCharacters = characters.reverse();
    const reverseStr = reverseCharacters.join("");
    return reverseStr;
  }
  
  function addReversedNumbers(num1, num2) {
    const reversedNum1 = reverseString(num1.split(",").join(""));
    const reversedNum2 = reverseString(num2.split(",").join(""));
  
    const sum = Number(reversedNum1) + Number(reversedNum2);
  
    const reversedSum = reverseString(sum.toString());
  
    return reversedSum;
  }
  
  // Example usage
  const num1 = "3,4,2";
  const num2 = "5,6,4";
  
  const result = addReversedNumbers(num1, num2);
  console.log(result);