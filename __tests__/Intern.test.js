const Intern = require('../lib/Intern');

test('creates a new Intern', () => {
    const intern = new Intern('Alpha', 123, 'alpha_beta@gamma.com', 'Kappa University');

    expect(intern.name).toBe('Alpha');
    expect(intern.id).toEqual(123);
    expect(intern.email).toBe('alpha_beta@gamma.com');
    expect(intern.school).toBe('Kappa University');
});

test("gets Intern's school", () => {
    const intern = new Intern('Alpha', 123, 'alpha_beta@gamma.com', 'Kappa University');

    expect(intern.school).toBe('Kappa University');
});

test("gets Intern's role", () => {
    const intern = new Intern('Alpha', 123, 'alpha_beta@gamma.com', 'Kappa University');

    expect(intern.getRole()).toBe('Intern');
});