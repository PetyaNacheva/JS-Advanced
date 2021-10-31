function solve(input){
    const result = new Map();
    input.forEach(x => {
      let[nameCity,product,price] = x.split(' | ');
      if (!result.has(product)) {
          result.set(product,new Map);
      }
      result.get(product).set(nameCity,Number(price))
    });
 
  for (let [key,value] of result) {
      let lowest = ([...value].reduce((l,r)=>{
          if (l[1]<r[1]) {
              return l;
          }else if(l[1]>r[1]){
              return r
          }
          return l;
      }));
      console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
  }
 
}

console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']));
