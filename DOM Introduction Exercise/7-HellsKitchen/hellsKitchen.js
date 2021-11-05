function solve(){
    let restaurants =[];
    
  let inputElement = document.getElementById('inputs');
    for (let i = 0; i < inputElement.length; i++) {
        let arrRestaurant = inputElement[i].split(" - ");
        let name = arrRestaurant[0];
        let personsArr = arrRestaurant[1].split(", ");
        let workers = []
        bestSalary =0;
        avgSalary =0;
        personsArr.forEach(element => {
            let arr =element.split(" ");
            let person = {
                name:arr[0],
                salary:Number(arr[1]),
            }
            workers.push(person);
            if(Number(arr[1])>bestSalary){
                bestSalary = Number(arr[1]);
            }
            avgSalary+=Number(arr[1]);
        });
        avgSalary/=(workers.length);
        let restObj = {name:name, 
            avgSalary:avgSalary.toFixed(2), 
            bestSalary:bestSalary,
            workers:workers}
        restaurants.push(restObj)
        avgSalary = 0;
    }
    restaurants.sort((a,b)=>a[0][avgSalary].localeComapere(b[0][avgSalary]));
    

   let firstRowElement = document.getElementById('bestRestaurant');
   let secondRowElement = document.getElementById('workers');
  firstRowElement.textContent = restaurants[0]


}
