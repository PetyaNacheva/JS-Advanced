class Restaurant{
    constructor(budget){
        this.budgetMoney = budget;
        this.menu = [];
        this.stockProducts =[];
        this.history=[];

    }

    loadProducts(products) {
        let productName;
        let productPrice;
        let productQuantity;
       for (let index = 0; index < products.length; index++) {
           let element = products[index].split(" ");
           productName = element[0];
           productQuantity = Number(element[1]);
           productPrice = Number(element[2]);

           if(productPrice<=this.budgetMoney){
               let prod = this.stockProducts.find(x=>x.productName==productName);

               if(prod){
                   let newQuantity = prod.productQuantity+productQuantity;
                   prod.productQuantity = newQuantity;
               }else{
                   let prodObj = {
                       productName,
                       productQuantity,
                   }
                   this.stockProducts.push(prodObj);
               }
               this.budgetMoney-=productPrice;

               this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
           }else{
               this.history.push(`There was not enough money to load ${productQuantity} ${productName}`) 
           }

       }    
        return this.history.join("\n");
    }

    addToMenu(meal, neededProducts, price){
      
        let food = this.menu.find(x=> x.meal==meal);

        if(!food){
            let objMeal = {
                meal, 
                neededProducts,
                price,
            }
            this.menu.push(objMeal);
            if(this.menu.length==1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }else{
                return `Great idea! Now with the ${meal} we have ${this.menu.length} meals in the menu, other ideas?`
            }

        }else{
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu(){

        if(this.menu.length==0){
            return `Our menu is not ready yet, please come later...`
        }else{
        let result = [];
    
        this.menu.forEach(element=>{
            result.push(`${element.meal} - $ ${element.price}`)
        });

        return result.join("\n");
        }
    }

    makeTheOrder(meal){
        let order = this.menu.find(x=>x.meal==meal);
        if(!order){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }else{
            let neededProducts = order.neededProducts;
            neededProducts.forEach(element=>{
                let prod =this.stockProducts.find(x=>x.productName==element);
                if(!prod){
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }else{
                    let product = neededProducts.split(" ");

                    prod.productQuantity-=product[1];
                }
            });
            this.budgetMoney+=order.price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${order.price}.`
        }

    }

}
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));


console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

