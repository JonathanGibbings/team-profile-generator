const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('Alpha', 123, 'alpha_beta@gamma.com');

    expect(employee.name).toBe('Alpha');
    expect(employee.id).toEqual(123);
    expect(employee.email).toBe('alpha_beta@gamma.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Alpha', 123, 'alpha_beta@gamma.com');

    expect(employee.getName()).toEqual(expect.any(Object));
});

test("gets employee's Id", () => {
    const employee = new Employee('Alpha', 123, 'alpha_beta@gamma.com');

    expect(employee.getId()).toEqual(expect.any(Object));
});

test("gets employee's email", () => {
    const employee = new Employee('Alpha', 123, 'alpha_beta@gamma.com');

    expect(employee.getEmail()).toEqual(expect.any(Object));
});

test("gets employee's role", () => {
    const employee = new Employee('Alpha', 123, 'alpha_beta@gamma.com');

    expect(employee.getRole()).toBe('Employee');
});