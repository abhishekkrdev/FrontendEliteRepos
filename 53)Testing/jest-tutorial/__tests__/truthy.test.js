test("truthy operators", () => {
    var name = "algocamp";
    var n = null;
    expect(n).toBeNull();
    expect(name).not.toBeNull();

    expect(name).toBeTruthy();
    expect(n).toBeFalsy();

    var num1 = 100;
    var num2 = -20;

    expect(num1).toBeGreaterThan(10);
});
