// todo: doing now: classes & subclasses
import inquirer from 'inquirer';
import questions from './happy.js';
import chalk from 'chalk';


// const petFaces = [
//     [`  __    __
//     o-''))_____\\
//     "--__/ * * * )
//     c_c__/-c____/`],

//     [`|\---/|
//     | o_o |
//      \_^_/`],

//      [` __         __
//      /  \.-"""-./  \
//      \    -   -    /
//       |   o   o   |
//       \  .-'''-.  /
//        '-\__Y__/-'
//           `---``]
// ]



// Variables

let petHappy = 100;
let petClean = 100;
let petHunger = 100;

// happy clean & hunger
// main Class

class cyberPet {
    constructor (name) {
    this.name = name
    this.happy = 100
    this.clean = 100
    this.hunger = 100;
    }

}

// const myFunctions = require('subHamster.cjs');
// import Hamster from 'subHamster.js';


// Subclass
class Hamster extends cyberPet {
    constructor(name) {
        super (name)
        this.name = name
        this.eatLettuce = 0
    }   

    plays() {
        this.happy += 20;
        console.log(chalk.italic.green((`${response.getName}'s plays with the Hamster Wheel & is 20 points happier.`))); // green response
        return this;
    }

    cleans() {
        this.clean += 20;
        console.log(chalk.italic.blue((`${response.getName}'s is 20 points cleaner.`))); //blue response
        return this;
    }


    eats() {
        this.hunger += 20;
        console.log(chalk.italic.grey((`You feed ${response.getName} Hamster Pellets. They are 20 points less hungry.`))); //grey response
        return this;
    }

}

class Cat extends cyberPet {
    constructor(name) {
        super (name)
        this.name = name
        this.eatLettuce = 0
}   

    plays() {
        this.happy += 20;
        console.log(chalk.italic.green((`${response.getName}'s plays with a Ball of Wool & is 20 points happier.`))); //green response
        return this;
    }

    cleans() {
        this.happy -= 20;
        console.log(chalk.italic.blue((`${response.getName}'s doesn't like to be cleaned and is 20 points less happy.`))); //blue response
        return this;
    }


    eats() {
        this.hunger += 20;
        console.log(chalk.italic.grey((`You feed ${response.getName} Cooked Beef. They are 20 points less hungry.`))); //grey response
        return this;
    }



}

class Dog extends cyberPet {
    constructor(name) {
        super (name)
        this.name = name
        this.eatLettuce = 0
    }
        plays() {
            this.happy += 20;
            console.log(chalk.italic.green((`${response.getName} is playing Fetch with you & is 20 points happier.`))); //green response
            return this;
        }
    
        cleans() {
            this.clean += 20;
            console.log(chalk.italic.blue((`${response.getName}'s is 20 points cleaner.`))); //blue response 
            return this;
        }
    
    
        eats() {
            this.hunger += 20;
            console.log(chalk.italic.grey((`You feed ${response.getName} Purina Pro Plan. They are 20 points less hungry.`))); //grey response
            return this;
        }
    
}   


// const questions = [
//     {
//         type: 'list',
//         name: 'getType',
//         message: (chalk.yellow("Choose the type of pet that you would like")), //yellow
//         choices: ['Hamster', 'Dog', 'Cat'], 
// // choices "array" within the inquirer questions rather than an external array, I don't know how to use an external array/list with inquirer
//     },
//     {
//         type: 'input',
//         name: 'getName', // the name of the var holding the user input data.
//         message: (chalk.yellow("Give your pet a name")) //yellow
//     }
    
// ]

const response = await inquirer.prompt(questions)
// let playersPet = new Hamster(response.getName)
// creating new object of cyberPet class with the name response of the questions.

let pet 
if(response.getType === 'Hamster'){
    pet = new Hamster(response.getType)
    console.log(`
         o___o
         (^o^)
        o/( )\o
        O_.^._O`)
} else if(response.getType === 'Dog'){
    pet = new Dog(response.getType)
    console.log(`                                      
            __    __
         o-''))_____\\
         "--__/ * * * )
         c_c__/-c____/`)
} else if(response.getType === 'Cat'){
    pet = new Cat(response.getType)
    console.log(`        
        'o.o'
       =(_ _)=
          U`)
}

console.log((chalk.red(`You have chosen a ${response.getType}`))); //red
console.log((chalk.red(`You have named your pet ${response.getName}`))); //red

// Functions

let clock1 = setInterval(depleteHappy, 500); //pet health decrement speed
let clock2 = setInterval(depleteClean, 600); //pet health decrement speed
let clock3 = setInterval(depleteHunger, 700); //pet health decrement speed


function depleteHappy(){
    if(pet.happy == 0){
    clearInterval(clock1);
    console.log((chalk.bold.green.bgWhite("Your pet needs play"))); //green
    gameovercheck();
    }
    else{
        pet.happy--;
    printRealtimeStats();
    }
}

function depleteClean(){
    if(pet.clean == 0){
    clearInterval(clock2);
    console.log((chalk.bold.blue.bgWhite("Your pet needs cleaning"))); //blue
    gameovercheck();
    }
    else{
    pet.clean--;
    printRealtimeStats();
    }
}

function depleteHunger(){
    if(pet.hunger == 0){
    clearInterval(clock3);
    console.log((chalk.bold.grey.bgWhite("Your pet needs feeding"))); //grey
    gameovercheck();
    }
    else{
    pet.hunger--;
    printRealtimeStats();
    }
}

function gameovercheck(){
    if(pet.health==0&&gameover==0){
    alert("Game Over!");
    gameover++;
    console.log((chalk.white.bgRed("Your pet needs to go to the hospital, you have failed as a Pet Owner."))); //white red bg
    }
    else {
        console.log((chalk.white.bgRed("Your pet needs to go to the hospital, you have failed as a Pet Owner."))); //white red bg
    }
}

function printRealtimeStats(){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write((chalk.yellow(`${response.getName} stats: Happy: [${pet.happy}%] Hunger: [${pet.hunger}%] Clean: [${pet.clean}%]`))); //green
}

const questions2 = [
    {
        type: 'list',
        name: 'getAction',
        message: (chalk.blue("Interact with your pet")),
        choices: ['Play', 'Feed', 'Clean'],
    }
    
]

const actions = async () => {
    const doing = await inquirer.prompt([
        {
            type:'list',
            name: 'getAction',
            message: (chalk.red.bold("What's your chosen action?")), //blue
            choices: ['Play', 'Feed', 'Clean', new inquirer.Separator()],  
        }
    ])
    .then((answers) => {
    if(answers.getAction === 'Feed') {
        pet.eats();
    } 
    else if(answers.getAction === 'Clean') {
        pet.cleans();    }   
    else if(answers.getAction === 'Play') {
        pet.plays();
        // pet.eats();
    } 
    actions()
})
}  
actions()