//node javascript_gfk.js

// let emp = {
//     firstName:"indrajit",
//     lastname:"kopnar",
//     salary:5000
// }
// console.log(delete emp.salary);
// console.log(emp);

// let arr = [1,2,3];
// console.log(delete arr[0]);
// console.log(arr);

// for(let a=0, b=5; a<=5;a++,b--){
// console.log(a,b);
// }

// function func(){
//     let value1 = 3 * (3 + 2); //3+2*3 output = 15;
//     console.log(value1);
// }
// func();                                      //node javascript_gfk.js

//objects in javascript

// const o = new Object();
// o.foo = 45;
// console.log(o);

// let school = {
//     name:"mg school",
//     location:"karjat",
//     established:"1970",

//     displayInfo: function(){
//         console.log(`${school.name} was established in ${school.established} at ${school.location}`);
//     }
// }
// school.displayInfo();

// let person = {
//     gender:"male"
// }
// let person1 = Object.create(person);
// person1.name="adam";
// person1.age=28;
// person1.nationality="indian";

// for(let key in person1){
//     console.log(key);
// }                                                //node javascript_gfk.js

// Defining object
// let person = {
//     first_name: 'Mukul',
//     last_name: 'Latiyan',
 
//     //method
//     getFunction: function () {
//         return (`The name of the person is
//           ${person.first_name} ${person.last_name}`)
//     },
//     //object within object
//     phone_number: {
//         mobile: '12345',
//         landline: '6789'
//     }
// }
// console.log(person.getFunction());
// console.log("mobile number: " + person.phone_number.mobile);

// Inheritance example
// class person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	// method to return the string
// 	toString() {
// 		return (`Name of person: ${this.name}`);
// 	}
// }
// class student extends person {
// 	constructor(name, id) {
// 		// super keyword for calling the above
// 		// class constructor
// 		super(name);
// 		this.id = id;
// 	}
// 	toString() {
// 		return (`${super.toString()},
// 		Student ID: ${this.id}`);
// 	}
// }
// let student1 = new student('Mukul', 22);
// console.log(student1.toString());                           //node javascript_gfk.js


// function myfunc(n1,n2){
//     return n1+n2;
// }
// const value = myfunc(5,5);
// console.log(value);

// function add(n1,n2){
//     return n1+n2;
// }
// console.log(add(5,10));


// function square(number){
//     return number*number;
// }
// const x = square(4);
// console.log(x);


// const a = ["a","ab","abc","abcde"];
// const a2 = a.map(function(s){
//     return s.length;
// })
// console.log(a2);

// const a3 = a.map((s) => s.length);
// console.log(a3);

// function myfunc(name){
//     return ("hello " + name + " welcome");
// }
// let name1 = "indra";
// console.log(myfunc(name1));                          //node javascript_gfk.js

// let welcome = function(){
//     return "hello javascript";
// }
// let func = welcome();
// console.log(func);

// function msg(firstname){
//     function hey(){
//         console.log("hey " + firstname);
//     }
//     return hey();
// }
// msg("indra");                                //node javascript_gfk.js

// function msg(firstname){
//     function hey(){
//         console.log("hey " + firstname);
//     }
//     return hey();
// }
// msg("indrajit");

// let msg = (function(){
//     return "welcome";
// })();
// console.log(msg);

// let msg = (function(){
//     return "hello";
// })();
// console.log(msg);

// function calculateVolume1(length){
//     return function(breadth){
//         return function (height){
//             return length * breadth * height;
//         }
//     }
// }
// console.log(calculateVolume1(4)(5)(6));


// let add = (a,b) => a+b;
// console.log(add(10,20));

// let add = (a,b) => a*b;
// console.log(add(2,2));                       // node javascript_gfk.js

// let great = (a,b) => {
//     if(a>b)
//     return "a is grt";
//     else
//    return  "b is grt";
// }
// console.log(great(1,2));
         
// let employees = {
//     empname:"indra",
//     department:" IT",
//     details:function(){
//         return this.empname + " works in department " + 
//         this.department;
//     }
// }
// console.log(employees.details());          //emp-object; ename&dept-properties; details-method but defined as function


