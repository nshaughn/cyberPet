import inquirer from 'inquirer';

// function playWithPet () {
//     console.log("pet play");

// }

//     inquirer
//     .prompt([
//     {
//         type:'list',
//         name: 'getAction',
//         message: "What's your chosen action?",
//         choices: ['Play', 'Feed', 'Clean'],

//     },
// ])
// .then((answers) => {
//         console.log(`Your chosen action is ${answers.getAction}`);
//         if(`${answers.getAction}` === "Play") {
//             console.log("Do something");
//             playWithPet();
//         };
    

// });

class cyberPet {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
    }
    drinks() {
        this.health += 5;
        return this;
    }
    eats() {
        this.health += 5;
        this.hunger += 10;
        console.log(`${this.name}'s health is ${this.health}`);
        return this;
    }

}
const questions = [
    {
        type: 'list',
        name: 'getType',
        message: "Choose the type of pet that you would like",
        choices: ['Hamster', 'Dog', 'Cat'],
    },     
    {
        type: 'input',
        name: 'getName', // the name of the var holding the user input data.
        message: "Give your pet a name"
    }
]

const response = await inquirer.prompt(questions)

let playerChoice = (`${response.getType}`)
const theCyberPet = new playerPetChoice;


console.log(`You have chosen ${response.getType}`);
console.log(`You have named your pet ${response.getName}`);