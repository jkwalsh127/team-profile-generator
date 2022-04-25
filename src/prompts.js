const managerPrompt = [
    {
        type: 'confirm',
        message: "Hit enter to begin by adding a manager",
        name: 'begin'
    },
]
const employeePrompt = [
    {
        type: 'input',
        message: "What is the employee's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is their id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'email'
    }
]

const nextPrompt = [
    {
        type: 'list',
        message: 'Which position would you like to add?',
        name: 'next',
        choices: ['Engineer', 'Intern', 'End prompt']
    }
]

module.exports = {
    managerPrompt: managerPrompt,
    employeePrompt: employeePrompt,
    nextPrompt: nextPrompt
};