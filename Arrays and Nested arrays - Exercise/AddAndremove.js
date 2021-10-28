function addAndRemove(input){
let number = 1;
let arr = [];
for (let i = 0; i < input.length; i++) {
    if(input[i]=='add'){
        arr.push(number);
    }else if(input[i]=='remove'){
        arr.splice(arr.length-1);
    }
    number++;
};
if(arr.length>0){
    return arr.join("\n");
}else{return "Empty";}
}
console.log(addAndRemove(['add', 
'add', 
'add', 
'add']
));
console.log(addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']));
console.log(addAndRemove(['remove', 
'remove', 
'remove']));
