function extract(input){
let bigest = input[0];
let result = [];

for (let i = 0; i < input.length; i++) {
    if(input[i]>=bigest){
        bigest =input[i];
        result.push(bigest);
    }
    
}

return result;

}
console.log(extract([1, 3, 8,  4,  10, 12, 3, 2, 24]));
console.log(extract([1, 2, 3,4]));
console.log(extract([20,  3,  2,  15,6,  1]));
