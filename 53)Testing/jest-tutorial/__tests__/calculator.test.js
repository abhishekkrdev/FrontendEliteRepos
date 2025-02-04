const mathOperations = require("../calculator");

// describe -> collection of similar tests
describe("Calculator Tests", () => {
    test("adding 1+2 should return 3", () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test("adding 1+2 should return 3", () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test("subtract testing", () => {
        let result = mathOperations.diff(10, 2);
        expect(result).toBe(8);
    });

    // toBe --> expected output
    // expect() --> actual output
});
