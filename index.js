const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generator.js');
const generateEngineerCard = require('./src/generator.js');
const generateInternCard = require('./src/generator.js');
const fileName = './dist/generated.html';

/**
 * this array of prompts will be sent to the inquirer module in the init() fxn
 * @type {object[]} - each prompt is its own object
 */
const questionsManager = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'office-number',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'next',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
    },
];
/**
 * this array of prompts will be sent to the inquirer module in the init() fxn
 * @type {object[]} - each prompt is its own object
 */
const questionsEngineer = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the engineer's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the engineer's github account?",
        name: 'github',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'next',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
    },
];
/**
 * this array of prompts will be sent to the inquirer module in the init() fxn
 * @type {object[]} - each prompt is its own object
 */
const questionsIntern = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the intern's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the intern's school name?",
        name: 'github',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'next',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
    },
];

const manager = [];
function storeManager(data) {
    manager.push(data);
}

const engineers = [];
function storeEngineer(data) {
    engineers.push(data);
};

const interns = [];
function storeIntern(data) {
    interns.push(data);
};

/**
 * 
 * @param {string} fileName - the name of the .md file that will be written
 * @param {object} data - the objectified answers provided by the user and passed from init()
 */
function writeToFile(fileName, data) {

    let writeData = generateHTML(data);

    fs.writeFile(fileName, writeData, (err) =>
        err ? console.log(err) : console.log('generated.html created!')
    )
};

function condenseData() {
    const condensedArrays = manager.concat(engineers).concat(interns);
    console.log(condensedArrays);
};

function init() {
    inquirer.prompt(questionsManager).then((answers) => {
        if (answers.next === 'Engineer') {
            storeManager(answers);
            return addEngineer();
        } else if (answers.next === 'Intern') {
            storeManager(answers);
            return addIntern();
        } else writeToFile(fileName, answers);
    })
};

function addEngineer() {
    inquirer.prompt(questionsEngineer).then((answers) => {
        if (answers.next === 'Engineer') {
            storeEngineer(answers);
            return addEngineer();
        } else if (answers.next === 'Intern') {
            storeEngineer(answers);
            return addIntern();
        } else storeEngineer(answers);
        condenseData();
    })
};

function addIntern() {
    inquirer.prompt(questionsIntern).then((answers) => {
        if(answers.next === 'Engineer') {
            storeIntern(answers);
            return addEngineer();
        } else if (answers.next === 'Intern') {
            storeIntern(answers);
            return addIntern();
        } else storeIntern(answers);
        condenseData();
    })
};

init();