// todo: doing now: Player can add health with 2 actions: play and feed ()

import inquirer from 'inquirer';

// Variables
let clock1 = setInterval(depleteHealth, 500); //pet health decrement speed
let petHealth = 100;

// Classes & Subclasses

class cyberPet {
    constructor (type) {
    this.type = type
}
}

const questions = [
    {
        type: 'list',
        name: 'getType',
        message: "Choose the type of pet that you would like",
        choices: ['Alien Dog', 'Alien Cat', 'English Snow Elf'],
// choices "array" within the inquirer questions rather than an external array, I don't know how to use an external array/list with inquirer
    },
    {
        type: 'input',
        name: 'getName', // the name of the var holding the user input data.
        message: "Give your pet a name"
    }
    
]

const response = await inquirer.prompt(questions)
let playersPet = new cyberPet(response.getName)
// creating new object of cyberPet class with the name response of the questions.

console.log(`You have chosen ${response.getType}`);
console.log(`You have named your pet ${response.getName}`);
console.log(`${response.getName} has ${petHealth} health points`)

// Functions

function printProgress(){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${petHealth} + '%'`);
}

function depleteHealth(){
    if(petHealth == 0){
    clearInterval(clock1);
    console.log("Your pet needs something");
    gameovercheck();
    }
    else{
    petHealth--;
    printProgress();
    // console.log(`${petHealth}`);

    // console.log(.value = petHunger);

    }
}



function gameovercheck(){
    if(petHealth==0&&gameover==0){
    alert("Game Over!");
    gameover++;
    console.log("Something");
    }
    else {
        console.log("Something");
    }
}

// const response = await inquirer.prompt(questionsPetInfo)
// let petType = new cyberPet(response.getType)

// const response = await inquirer.prompt(questionsPetName)
// let petName = new cyberPet(response.getName);