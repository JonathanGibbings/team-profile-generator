const fs = require('fs');
const inquirer = require('inquirer');

const promptEmployeeQuestions = (role) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the employee?',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter an ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the employee?',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            },
            when: role = 'manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github username of the employee?',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter a github username');
                    return false;
                }
            },
            when: role = 'engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the employee?',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            },
            when: role = 'intern'
        }
    ])
};

const init = () => {
    console.log(`
====================
    Team Manager
====================
    `)
    return promptEmployeeQuestions('manager');
};

init().then(data => console.log(data));