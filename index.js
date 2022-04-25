const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generator.js');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const prompts = require('./src/prompts');
const fileName = './dist/generated.html';

const employees = [];

function init() {
    inquirer.prompt(prompts.managerPrompt).then(() => {
        return managerQuestions();
    }
)};
function managerQuestions() {
    inquirer.prompt([
        ...prompts.employeePrompt,
            {
                type: 'input',
                message: 'What is their office number?',
                name: 'officeNumber'
            }
    ]).then((answers) => {
        var newManager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
        // console.log(newManager);
        employees.push(newManager);
        // console.log(employees);

        return nextEmployee();
    })
};
function nextEmployee() {
    inquirer.prompt(prompts.nextPrompt).then((answers) => {
        if (answers.next === 'Engineer') {
            return nextEngineer();
        } else if (answers.next === 'Intern') {
            return nextIntern();
        } else 
        console.log(employees);
        return writeToFile(fileName, employees);
    })
}
function nextEngineer() {
    inquirer.prompt([
        ...prompts.employeePrompt,
            {
                type: 'input',
                message: 'What is their GitHub profile name?',
                name: 'github'
            }
    ]).then((answers) => {
        var newEngineer = new engineer(answers.name, answers.id, answers.email, answers.github);
        // console.log(newEngineer);
        employees.push(newEngineer);
        // console.log(employees);

        return nextEmployee();
    })
};
function nextIntern() {
    inquirer.prompt([
        ...prompts.employeePrompt,
            {
                type: 'input',
                message: 'What is their school name?',
                name: 'school'
            }
    ]).then((answers) => {
        var newIntern = new intern(answers.name, answers.id, answers.email, answers.school);
        // console.log(newIntern);
        employees.push(newIntern);
        // console.log(employees);

        return nextEmployee();
    })
};

function writeToFile(filename, employees) {
    let writeData = generator(employees);
    fs.writeFile(filename, writeData, (err) => {
        if (err) {throw err;}
        console.log(`successfully wrote to ${filename}`);
    })
}

init();

// module.exports = passEmployees;
    // if (answers.next === 'Engineer') {
        //     var newManager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
        //     employees.push(newManager);
            // return addEngineer();
        // } else if (answers.next === 'Intern') {
        //     var newManager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
        //     employees.push(newManager);
            // return addIntern();
        // } 
//         var newManager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
//         employees.push(newManager);
//         console.log(employees);
//         var roles = employees.forEach(employee.getRole());
//         console.log(roles);
//         // condenseData();
//     })
// }; 


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

// const questionsEngineer = [
//     {
//         type: 'input',
//         message: "What is the engineer's name?",
//         name: 'name',
//     },
//     {
//         type: 'input',
//         message: "What is the engineer's id?",
//         name: 'id',
//     },
//     {
//         type: 'input',
//         message: "What is the engineer's email?",
//         name: 'email',
//     },
//     {
//         type: 'input',
//         message: "What is the engineer's github username?",
//         name: 'github',
//     },
//     {
//         type: 'list',
//         message: 'Which type of team member would you like to add?',
//         name: 'next',
//         choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
//     },
// ];

// const questionsIntern = [
//     {
//         type: 'input',
//         message: "What is the intern's name?",
//         name: 'name',
//     },
//     {
//         type: 'input',
//         message: "What is the intern's id?",
//         name: 'id',
//     },
//     {
//         type: 'input',
//         message: "What is the intern's email?",
//         name: 'email',
//     },
//     {
//         type: 'input',
//         message: "What is the intern's school name?",
//         name: 'school',
//     },
//     {
//         type: 'list',
//         message: 'Which type of team member would you like to add?',
//         name: 'next',
//         choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
//     },
// ];






// function storeManager(data) {
//     managerArray.push(data);
// }

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

// function init() {
//     inquirer.prompt(questionsManager).then((answers) => {
//         // if (answers.next === 'Engineer') {
//         //     var newManager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
//         //     employees.push(newManager);
//             // return addEngineer();
//         // } else if (answers.next === 'Intern') {
//         //     var newManager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
//         //     employees.push(newManager);
//             // return addIntern();
//         // } 
//         var newManager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
//         employees.push(newManager);
//         console.log(employees);
//         var roles = employees.forEach(employee.getRole());
//         console.log(roles);
//         // condenseData();
//     })
// };

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

// init();

// module.exports = storeManager;