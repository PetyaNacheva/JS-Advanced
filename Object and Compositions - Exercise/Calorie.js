function calories(input){
const foods={};

for (let i = 0; i < input.length-1; i++) {
   if(i%2==0){
       let food = input[i];
       let callories = Number(input[i+1]);
       foods[food]= callories;
   }
}
return foods;
}

console.log(calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
