const URLValidation = require("../client/js/validateURL");

describe('test validateURL', () => {
    test('It should return true', () => {
        const result = URLValidation.validateURL("https://www.nytimes.com/2020/04/17/us/coronavirus-death-rate.html");
        expect(result).toBe(true);

    });
});

describe('test validateURL', () => {
    test('It should return false', () => {
        const result = URLValidation.validateURL("coronavirus");
        expect(result).toBe(false);

    });
});