const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = this.constructor.name;
    }

    getName() {
        return inquirer.prompt({
            type: 'input',
            name: 'name',
            message: `What is the name of the ${this.getRole()}`,
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        });
    };
    getId() {
        return inquirer.prompt({
            type: 'input',
            name: 'id',
            message: `What is the ID of the ${this.getRole()}?`,
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter an ID');
                    return false;
                }
            }
        });
    };
    getEmail() {
        return inquirer.prompt({
            type: 'input',
            name: 'email',
            message: `What is the email of the ${this.getRole()}?`,
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        });
    };
    getRole() {
        return this.role;
    };
}

module.exports = Employee;