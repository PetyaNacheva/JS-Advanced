function heroInvenory(input){
let result = [];
while(input.length){
    let heroInput = input.shift();
    let [name, level, itemsAsString] = heroInput.split(" / ");
    level = Number(level);
    let items = itemsAsString ? itemsAsString.split(", ") : [];

    let hero = {
        name : name,
        level : level,
        items : items.filter(x=>x),
    }
    result.push(hero);
}

return JSON.stringify(result);
}

console.log(heroInvenory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));
