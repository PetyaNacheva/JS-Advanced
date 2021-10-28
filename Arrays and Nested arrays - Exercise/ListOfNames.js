function list(input){
let result = [];
let num = 1;
input = input.sort((a,b)=>a.localeCompare(b));
for (let i = 0; i < input.length; i++) {
    let toPush = num+"."+input[i];
    result.push(toPush);
    num++;
}
return result.join("\n");
}
console.log(list(["John", "Bob", "Christina", "Ema"]));
