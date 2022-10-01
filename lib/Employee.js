class Employee {
    constructor(name) {
        this.name = name;
        this.id = 0;
        this.email = '';
    }

    getName() {};
    getId() {};
    getEmail() {};
    getRole() {
        return 'Employee';
    };
}

module.exports = Employee;