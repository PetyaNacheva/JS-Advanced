class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = {'picture':200, 'photo': 50, 'item':250}
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity){
        let model = articleModel.toLowerCase();
        
        
        if(!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())){
            throw new Error("This article model is not included in this gallery!");
        }
        let article = this.find(articleModel, articleName);
        if(article){
            article.quantity+=quantity;
        }else{
            let articleObj = {
                articleModel: model,
               articleName,
                quantity,
            }
            this.listOfArticles.push(articleObj);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        
    }

    inviteGuest (guestName, personality){
        let points=0;
        
        if(personality!="Vip"&&personality!="Middle"){
           points = 50;
        }else if(personality=="Vip"){
            points = 500;
        }else {
            points = 250;
        }

        let guest = {
            guestName:guestName,
            points: points,
            purchaseArticle:0,
        }
        let guestToFind = this.findGuest(guestName);
        if(guestToFind){
            throw new Error(`${guestName} has already been invited."`)
        }else{ 
            this.guests.push(guest)
           
    }

        return `You have successfully invited ${guestName}!`
    }

    buyArticle ( articleModel, articleName, guestName){
        let article = this.find(articleModel,articleName);

        if(!article){
            throw new Error ("This article is not found.")
        }else if(article.quantity===0){
            return `The ${articleName} is not available.`
        }
        let guest = this.findGuest(guestName);
        if(!guest){
            return "This guest is not invited."
        }
        
        

        if(guest.points<this.possibleArticles[articleModel.toLowerCase]){
            return "You need to more points to purchase the article."

        }else{
            let articlePoint = this.possibleArticles[articleModel.toLowerCase()];
            guest.points-=articlePoint;
            guest.purchaseArticle+=1;
            article.quantity-=1;
             return `${guestName} successfully purchased the article worth ${articlePoint} points.`

        }
    }

    showGalleryInfo(criteria){
        let result = [];
        if(criteria=="article"){
            result.push("Articles information:");
            this.listOfArticles.forEach(x=>result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`))
        }else{
            result.push("Guests information:")
            this.guests.forEach(x=>result.push(`${x.guestName} - ${x.purchaseArticle}`))
        }
        return result.join('\n')
    }


     find(articleModel, articleName){
        return this.listOfArticles.find(x=>x.articleModel==articleModel.toLowerCase() && x.articleName==articleName);
    }

   
    findGuest (guestName) {
        return this.guests.find(x=>x.guestName==guestName);
    }
   
    
       /* if(this.listOfArticles.includes(articleName)&&this.listOfArticles.articleName[articleModel]===articleModel){
                this.listOfArticles.articleName[articleModel][quantity];
        }*/

    }
   
    


    let art = new ArtGallery ("Curtis Mayfield");

    art.addArticle('picture', 'Mona Liza', 3);
    art.addArticle('Item', 'Ancient vase', 2);
    art.addArticle('picture', 'Mona Liza', 1);
    
    art.inviteGuest('John', 'Vip');
    art.inviteGuest('Peter', 'Middle');
    art.buyArticle('picture', 'Mona Liza', 'John')
    art.buyArticle('item', 'Ancient vase', 'Peter')
    art.buyArticle('item', 'Mona Liza', 'John')
