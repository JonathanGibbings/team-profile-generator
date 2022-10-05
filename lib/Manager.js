const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getOfficeNumber() {
        return inquirer.prompt({
            type: 'input',
            name: 'officeNumber',
            message: `What is the office number of the ${this.getRole()}?`,
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            },
        });
    };

    getRole() {
        return 'Manager';
    };
}

module.exports = Manager;