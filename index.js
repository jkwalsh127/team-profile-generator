const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generator.js');
const storemanager = require('./lib/manager');
const employee = require('./lib/employee');

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
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'next',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
    },
];

// const questionsManager = [
//     {
//         type: 'input',
//         message: "What is the team manager's name?",
//         name: 'name',
//     },
//     {
//         type: 'input',
//         message: "What is the team manager's id?",
//         name: 'id',
//     },
//     {
//         type: 'input',
//         message: "What is the team manager's email?",
//         name: 'email',
//     },
//     {
//         type: 'input',
//         message: "What is the team manager's office number?",
//         name: 'officeNumber',
//     },
//     {
//         type: 'list',
//         message: 'Which type of team member would you like to add?',
//         name: 'next',
//         choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
//     },
// ];

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
        message: "What is the engineer's github username?",
        name: 'github',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'next',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
    },
];

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
        name: 'school',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'next',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
    },
];

const managerArray = [];
function storeManager(data) {
    employee.getRole();
    employee.getName(data.name);
    employee.getId(data.getId);
    employee.getEmail(data.email);
    console.log(data);
    // managerArray.push(data);
}

// const engineersArray = [];
// function storeEngineer(data) {
//     engineersArray.push(data);
// };

// const internsArray = [];
// function storeIntern(data) {
//     internsArray.push(data);
// };

// function condenseData() {
//     const fileName = './dist/generated.html';
//     const managers = managerArray;
//     const engineers = engineersArray;
//     const interns = internsArray;

//     writeToFile(fileName, managers, engineers, interns)    
// };


// function writeToFile(fileName, managers, engineers, interns) {

//     let writeData = generateHTML({managers, engineers, interns});


//     fs.writeFile(fileName, writeData, (err) =>
//         err ? console.log(err) : console.log('generated.html created!')
//     )
// };

function init() {
    inquirer.prompt(questionsManager).then((answers) => {
        if (answers.next === 'Engineer') {
            new storemanager(answers.name, answers.id, answers.email);
            // return addEngineer();
        } else if (answers.next === 'Intern') {
            new storemanager(answers.name, answers.id, answers.email);
            // return addIntern();
        } else new storemanager(answers.name, answers.id, answers.email);
        // condenseData();
    })
};

// function init() {
//     inquirer.prompt(questionsManager).then((answers) => {
//         if (answers.next === 'Engineer') {
//             storeManager(answers);
//             return addEngineer();
//         } else if (answers.next === 'Intern') {
//             storeManager(answers);
//             return addIntern();
//         } else storeManager(answers);
//         condenseData();
//     })
// };

// function addEngineer() {
//     inquirer.prompt(questionsEngineer).then((answers) => {
//         if (answers.next === 'Engineer') {
//             storeEngineer(answers);
//             return addEngineer();
//         } else if (answers.next === 'Intern') {
//             storeEngineer(answers);
//             return addIntern();
//         } else storeEngineer(answers);
//         condenseData();
//     })
// };

// function addIntern() {
//     inquirer.prompt(questionsIntern).then((answers) => {
//         if(answers.next === 'Engineer') {
//             storeIntern(answers);
//             return addEngineer();
//         } else if (answers.next === 'Intern') {
//             storeIntern(answers);
//             return addIntern();
//         } else storeIntern(answers);
//         condenseData();
//     })
// };

init();

module.exports = storeManager;