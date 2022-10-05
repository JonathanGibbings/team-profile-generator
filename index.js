const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const menu = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Would you like to:',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
    }).then(answer => {
        console.log(answer);
        if (answer.menu === 'Add an Engineer') {
            return addEngineer();
        } else if (answer.menu === 'Add an Intern') {
            return addIntern();
        } else {
            return;
        }
    });
};

const addManager = () => {
    const manager = new Manager();
    return manager.getName()
        .then(answer => {
            manager.name = answer.name;
            return manager.getId();
        })
        .then(answer => {
            manager.id = answer.id;
            return manager.getEmail();
        })
        .then(answer => {
            manager.email = answer.email;
            return manager.getOfficeNumber();
        })
        .then(answer => {
            manager.officeNumber = answer.officeNumber;
            teamArray.push(manager);
        });
};

const addEngineer = () => {
    const engineer = new Engineer();
    return engineer.getName()
    .then(answer => {
        engineer.name = answer.name;
        return engineer.getId();
    })
    .then(answer => {
        engineer.id = answer.id;
        return engineer.getEmail();
    })
    .then(answer => {
        engineer.email = answer.email;
        return engineer.getGithub();
    })
    .then(answer => {
        engineer.github = answer.github;
        teamArray.push(engineer);
    })
    .then(() => {
        return menu();
    });
};

const addIntern = () => {
    const intern = new Intern();
    return intern.getName()
    .then(answer => {
        intern.name = answer.name;
        return intern.getId();
    })
    .then(answer => {
        intern.id = answer.id;
        return intern.getEmail();
    })
    .then(answer => {
        intern.email = answer.email;
        return intern.getSchool();
    })
    .then(answer => {
        intern.school = answer.school;
        teamArray.push(intern);
    })
    .then(() => {
        return menu();
    });
};

const initTeam = () => {
    addManager()
        .then(menu)
        .then(() => {
            console.log(teamArray);
            return;
        });
};




initTeam();