function formatInput(input:number | string):string{
    if(typeof input === "number"){
        return `Number:${input}`;
    }else{
        return `String:${input}`;
    }
}
console.log(formatInput(123));
console.log(formatInput("abc"));