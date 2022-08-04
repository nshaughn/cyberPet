function playWithPet () {
    console.log("pet play");

}

    inquirer
    .prompt([
    {
        type:'list',
        name: 'getAction',
        message: "What's your chosen action?",
        choices: ['Play', 'Feed', 'Clean'],

    },
])
.then((answers) => {
        console.log(`Your chosen action is ${answers.getAction}`);
        if(`${answers.getAction}` === "Play") {
            console.log("Do something");
            playWithPet();
        };
    

});