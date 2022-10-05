const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return inquirer.prompt({
            type: 'input',
            name: 'school',
            message: `What is the school of the ${this.getRole()}?`,
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter a school');
                    return false;
                }
            }
        });
    };

    getRole() {
        return 'Intern';
    };
}

module.exports = Intern;