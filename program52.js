function displayDigits(iNo) {
    let iDigit;
    while (iNo > 0) {
        iDigit = iNo % 10;
        console.log(iDigit);
        iNo = Math.floor(iNo / 10); // Use Math.floor() to ensure integer division
    }
}

function main() {
    let iValue = 12345; // Example input number
    displayDigits(iValue);
    return 0; // JavaScript doesn't have a return type for main, so this line is unnecessary
}

main(); // Call the main function
