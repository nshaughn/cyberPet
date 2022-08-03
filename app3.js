// todo: doing now: Player can add health with 2 actions: play and feed ()

import inquirer from 'inquirer';

// Variables
let petHappy = 100;
let petClean = 100;
let petHunger = 100;

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
        choices: ['Hamster', 'Dog', 'Cat'],
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
// console.log(`${response.getName} has ${petHealth} health points`)

// Functions


let clock1 = setInterval(depleteHappy, 500); //pet health decrement speed
let clock2 = setInterval(depleteClean, 600); //pet health decrement speed
let clock3 = setInterval(depleteHunger, 700); //pet health decrement speed


function depleteHappy(){
    if(petHappy == 0){
    clearInterval(clock1);
    console.log("Your pet needs play");
    gameovercheck();
    }
    else{
    petHappy--;
    printRealtimeStats();
    // console.log(`${petHealth}`);

    // console.log(.value = petHunger);

    }
}

function depleteClean(){
    if(petClean == 0){
    clearInterval(clock2);
    console.log("Your pet needs cleaning");
    gameovercheck();
    }
    else{
    petClean--;
    printRealtimeStats();
    // console.log(`${petHealth}`);

    // console.log(.value = petHunger);

    }
}

function depleteHunger(){
    if(petHunger == 0){
    clearInterval(clock3);
    console.log("Your pet needs feeding");
    gameovercheck();
    }
    else{
    petHunger--;
    printRealtimeStats();
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

function printRealtimeStats(){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Pet stats: Happy: ${petHappy}% Clean: ${petClean}% Hunger: ${petHunger}%`);
}


// const response = await inquirer.prompt(questionsPetInfo)
// let petType = new cyberPet(response.getType)

// const response = await inquirer.prompt(questionsPetName)
// let petName = new cyberPet(response.getName);