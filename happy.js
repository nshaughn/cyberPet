import chalk from 'chalk';

const questions = [
    {
        type: 'list',
        name: 'getType',
        message: (chalk.yellow("Choose the type of pet that you would like")), //yellow,
        choices: ['Hamster', 'Dog', 'Cat'],
// choices "array" within the inquirer questions rather than an external array, I don't know how to use an external array/list with inquirer
    },
    {
        type: 'input',
        name: 'getName', // the name of the var holding the user input data.
        message: (chalk.yellow("Give your pet a name")) //yellow
    }
    
]

export default questions