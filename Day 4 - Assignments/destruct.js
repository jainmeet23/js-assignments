const student = {
    name:"Helsinki",
    age:24,
    projects:{
        dicegame: "Two player Dice game using Javascript"
    }
}

let {name,age,projects:{dicegame}} = student

console.log(name,age,dicegame)