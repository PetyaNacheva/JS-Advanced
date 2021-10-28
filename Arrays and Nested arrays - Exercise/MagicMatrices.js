function matrix(arr){
let rowSum = [];
let colSum = [];
for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    let sum = row.reduce((acc,val)=>(acc+val),0);
    rowSum.push(sum);
}

for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    let newRow = [];

    for (let j = 0; j < arr.length; j++) {
        let index = arr.length - 1 - j;
        newRow.push(arr[index][i]);
    }
    let sum = newRow.reduce((acc, val) => (acc + val), 0);
    colSum.push(sum);
}
return rowSum.concat(colSum).every((el, i, arr) => el === arr[0]);
}

console.log(matrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));

console.log(matrix([[11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]]));
console.log(matrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));
