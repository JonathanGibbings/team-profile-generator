const Manager = require('../lib/Manager');

test('creates a new manager', () => {
    const manager = new Manager('Alpha', 123, 'alpha_beta@gamma.com', 456);

    expect(manager.name).toBe('Alpha');
    expect(manager.id).toEqual(123);
    expect(manager.email).toBe('alpha_beta@gamma.com');
    expect(manager.officeNumber).toEqual(456);
});

test("gets manager's office number", () => {
    const manager = new Manager('Alpha', 123, 'alpha_beta@gamma.com', 456);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Object));
});

test("gets manager's role", () => {
    const manager = new Manager('Alpha', 123, 'alpha_beta@gamma.com');

    expect(manager.getRole()).toBe('Manager');
});