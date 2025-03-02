type User = {name:string;age:number};

function greetUser(user:User){
    const greetmsg = 'Hello, ' + user.name;
    console.log(greetmsg);  
}



function sum(num1:number,num2:number){
    return num1+num2;
}

function isEligible(user:User){
    console.log(user.age>=18)
}



let greet: (user:User) => void ;
greet = greetUser;


let user = {name:'john',age:29};
greet(user);

greet=isEligible;
greet(user);


// greet=sum;
// console.log(greet(user));

