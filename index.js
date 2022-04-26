const inquirer = require('inquirer');
const fs = require('fs');
let prompts = require('./src/prompts');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const generateHTML = require('./src/generator.js');
const fileName = './dist/generated.html';

// array for populating with employees based on user inputs
const employees = [];

/**
 * the initiator function uses inquirer to begin calling the prompts
 * @returns {function} returns the initial prompt to user, asking for manager info
 */
function init() {
    inquirer.prompt(prompts.managerPrompt).then(() => {
        return managerQuestions();
    }
)};

/**
 * the standard employee questions are asked, followed by unique manager info, their office number
 * user responses returns promise and pushes a new manager class to the employee array
 * @returns {function} returns next prompt to allow the user to input a new employee
 */
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
        employees.push(newManager);
        return nextEmployee();
    })
};

/**
 * prompts the user to select to add engineer, intern, or to stop adding
 * @returns based on user selection, returns either prompts relating selected employee, or initiates writeToFile if user elects to stop adding
 */
function nextEmployee() {
    inquirer.prompt(prompts.nextPrompt).then((answers) => {
        if (answers.next === 'Engineer') {
            return nextEngineer();
        } else if (answers.next === 'Intern') {
            return nextIntern();
        } return writeToFile(fileName, employees);
    })
}

/**
 * provides prompts for new engineer
 * user responses returns promise and pushes a new engineer class to the employee array
 * @return {function} returns next prompt to allow the user to input a new employee
 */
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
        employees.push(newEngineer);
        return nextEmployee();
    })
};

/**
 * provides prompts for new intern
 * user responses returns promise and pushes a new intern class to the employee array
 * @return {function} returns next prompt to allow the user to input a new employee
 */
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
        employees.push(newIntern);
        return nextEmployee();
    })
};

/**
 * passes data gathered from prompts to be generated into the new html page
 * @param {string} filename sets the path and file name
 * @param {array} employees consists of employee classes and their objects and key/value pairs that correspond to user inputs
 */
function writeToFile(filename, employees) {
    console.log(typeof employees);
    let writeData = generateHTML(employees);
    console.log(writeData);
    fs.writeFile(filename, writeData, (err) =>
        err ? console.log(err) : console.log('generated.html created!')
    )
}

init();