class SummerCamp{
    constructor(organizer, location){
        this.organizer=organizer;
        this.location=location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500}
        this.listOfParticipants= [];

    }

    registerParticipant(name, condition, money){
        if(!this.priceForTheCamp.hasOwnProperty(condition.toLowerCase())){
            throw new Error("Unsuccessful registration at the camp.");
        }

        if(this.listOfParticipants.find(x=>x.name==name)){
            return `The ${name} is already registered at the camp.`
        }
        let price=0 
        if(condition=="child"){
            price = 150;
        }else if(condition=="student"){
            price = 300;
        
        }else if(condition =="collegian"){
            price = 500;
        }

        if(money<price){
            return `The money is not enough to pay the stay at the camp.`
        }else{
            let participant = {
                name,
                condition:condition.toLowerCase(),
                power:100,
                wins:0,
            }
            this.listOfParticipants.push(participant);
            return `The ${name} was successfully registered.`
        }
    }



    unregisterParticipant(name){
        let participant = this.listOfParticipants.find(p=>p.name==name);
        if(!participant){
            throw new Error(`The ${name} is not registered in the camp.`)
        }else{
            this.listOfParticipants = this.listOfParticipants.filter(p=>p.name!=name);
            return `The ${name} removed successfully.`
        }
    }



    timeToPlay(typeOfGame, participant1, participant2){

        if(typeOfGame=="WaterBalloonFights"){
            let firstPlayer = this.findparticipant(participant1);
            let secondPlayer = this.findparticipant(participant2)
                if(!firstPlayer||!secondPlayer){
                    throw new Error('Invalid entered name/s.');
                }
                if(firstPlayer.condition!=secondPlayer.condition){
                    throw new Error("Choose players with equal condition.");
                }

                if(firstPlayer.power>secondPlayer.power){
                   firstPlayer.wins+=1;
                    return `The ${participant1} is winner in the game ${typeOfGame}.`
                }else if(firstPlayer.power<secondPlayer.power){
                    secondPlayer.wins+=1;
                    return `The ${participant2} is winner in the game ${typeOfGame}.`
                }else{
                    return 'There is no winner.'
                }


        }else if(typeOfGame=="Battleship"){
            let player = this.findparticipant(participant1);
            if(!player){
                throw new Error('Invalid entered name/s.');
            }
            player.power+=20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        this.listOfParticipants.sort((f,s)=>s.wins-f.wins).forEach(p=>result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`))
        return result.join("\n");
    }

    findparticipant(name){
        return this.listOfParticipants.find(p=>p.name==name);
    }
}

/*const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));*/

/*const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));*/

/*const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));*/

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



