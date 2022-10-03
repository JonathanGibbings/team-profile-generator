const Engineer = require('../lib/Engineer');

test('creates a new engineer', () => {
    const engineer = new Engineer('Alpha', 123, 'alpha_beta@gamma.com', 'AlphaBeta');

    expect(engineer.name).toBe('Alpha');
    expect(engineer.id).toEqual(123);
    expect(engineer.email).toBe('alpha_beta@gamma.com');
    expect(engineer.github).toBe('AlphaBeta');
});

test("gets engineer's github name", () => {
    const engineer = new Engineer('Alpha', 123, 'alpha_beta@gamma.com', 'AlphaBeta');

    expect(engineer.github).toBe('AlphaBeta');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Alpha', 123, 'alpha_beta@gamma.com', 'AlphaBeta');

    expect(engineer.getRole()).toBe('Engineer');
});