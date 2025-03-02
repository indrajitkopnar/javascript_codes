const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function display(times) {
    for (let i = 1; i <= times; i++) {
        console.log("hello");
    }
}

// Ask user for input
rl.question("Enter the number of times you want to print the statement: ", (input) => {
    const n = parseInt(input);
    display(n);
    rl.close();
});
