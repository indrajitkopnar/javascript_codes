function greetUser(user) {
    var greetmsg = 'Hello, ' + user.name;
    console.log(greetmsg);
}
function sum(num1, num2) {
    return num1 + num2;
}
function isEligible(user) {
    console.log(user.age >= 18);
}
var greet;
greet = greetUser;
var user = { name: 'john', age: 29 };
greet(user);
greet = isEligible;
greet(user);
// greet=sum;
// console.log(greet(user));
