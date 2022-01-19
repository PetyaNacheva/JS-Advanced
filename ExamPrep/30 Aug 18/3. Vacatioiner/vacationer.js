class Vacationer {
    constructor(fullName, creditCard){
        this.fullName = {
            firstName: fullName[0],
            middleName: fullName[1],
            lastName: fullName[2],
         };
         this.idNumber =  generateIdNumber();
        this.creditCard = {
            cardNumber: creditCard[0],
            expirationDate: creditCard[1],
            securityNumber: creditCard[2],
        };
        this.wishList = [];
        }
 

}
