const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return inquirer.prompt({
            type: 'input',
            name: 'github',
            message: `What is the github username of the ${this.getRole()}?`,
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter a github username');
                    return false;
                }
            }
        });
    };

    getRole() {
        return this.role;
    };
}

module.exports = Engineer;
