function sortCriteria(input){
    return input.sort((a,b)=>{
        if(a.length===b.length){
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }).join('\n');
}

console.log(sortCriteria(['alpha', 
'beta', 
'gamma']));
console.log(sortCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));
console.log(sortCriteria(['test', 
'Deny', 
'omen', 
'Default']
));
