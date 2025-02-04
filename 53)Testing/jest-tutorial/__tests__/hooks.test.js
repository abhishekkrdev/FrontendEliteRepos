// setup and cleaning methods

const mathOperations = require("../calculator");

// 2 -> before each and after each
// 2-> beforeAll and after All

describe("Calculator Test", () => {
    var input1 = 0;
    var input2 = 0;
    beforeAll(() => {
        console.log("beforeAll Called");
    });

    afterAll(() => {
        console.log("afterAll Called");
    });

    beforeEach(() => {
        console.log("beforeEach Called");
        input1 = 1;
        input2 = 2;
    });

    afterEach(() => {
        console.log("afterEach Called");
    });

    test("add", () => {
        var res = mathOperations.diff(input1, input2);
        expect(res).toBe(3);
    });
});
