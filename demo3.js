const arr = [22,4,5,666,7,889,54];
const sortedarr = arr.sort((a,b) => (a-b));
sortedarrsmallest = sortedarr[0];
sortedbiggest = sortedarr[sortedarr.length-1];
console.log(sortedarrsmallest, sortedbiggest);