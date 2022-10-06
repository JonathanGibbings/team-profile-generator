const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const writeFile = teamData => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', teamData, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'index.html created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'style.css copied!'
            });
        });
    });
};

const menu = () => {
    console.log(`================================`);
    return inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Would you like to:',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
    }).then(answer => {
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
        .then(() => generatePage(teamArray))
        .then(pageHTML => writeFile(pageHTML))
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => console.log(err));
};




initTeam();