class ChristmasDinner {

    constructor(budget){
        this.budget = Number(budget);
        this.dishes = [];
        this.products=[];
        this.guests = {};
    
    }
    get budget(){
        return this._budget;
    }

    set budget(value){
        if(Number(value<0)){
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    
    
    shopping(product){
        let productName = product[0];
        let productPrice = Number(product[1]);
        if(this.budget<productPrice){
            throw new Error("Not enough money to buy this product")
        }else{
            this.products.push(productName);
            this.budget-=Number(productPrice);
            return `You have successfully bought ${productName}!`
        }
    }

    recipes({recipeName, productsList}){
        //{ recipeName: string, productsList: array of strings }.
        let recipeNameToCook= recipeName;
        let productsForReciepe = productsList;
        
       for (const product of productsForReciepe) {
        if(!this.products.includes(product)){
            throw new Error ("We do not have this product")
        }   
       }
      
       this.dishes.push({ recipeName, productsList })
       return `${recipeNameToCook} has been successfully cooked!`
    }

    inviteGuests(name, dish){
        if (this.dishes.some(d => d.recipeName == dish) == false) {
            throw new Error("We do not have this dish");
        } else if (this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited");
        }
       /* let dishToCook = this.dishes.find(d=>d.recipeName==dish)
        if(!dishToCook){
            throw new Error("We do not have this dish");
        }
        let guestInvited = this.guests.find(g=>g.name==name);
        if(guestInvited){
            throw new Error("This guest has already been invited");
        }*/
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance(){
        let result = [];
       /* this.guests.forEach(guest=>{
            let dishName = this.dishes.find(d=>d.recipeName==guest.dish);
            let products =[]
            for (const product of dishName.productsList) {
                products.push(product)
            }         

            result.push(`${guest.name} will eat ${guest.dish}, which consists of ${products.join(', ')}`)
        })*/
        Object.entries(this.guests).forEach(([guestName, dish]) => {
            result.push(`${guestName} will eat ${dish}, which consists of ${this.dishes.find(d => d.recipeName == dish).productsList.join(', ')}`);
        });
        return result.join("\n");
    }


    
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());


