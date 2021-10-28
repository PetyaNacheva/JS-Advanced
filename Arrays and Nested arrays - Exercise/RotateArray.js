function roatate(input, number){
for (let i = 0; i < number; i++) {
 input.unshift(input.pop());
}
return input.join(" ");
}
console.log(roatate(['1', 
'2', 
'3', 
'4'], 
2));
console.log(roatate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15));
