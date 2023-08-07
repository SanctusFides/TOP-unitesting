const capitalize = require("./capitalize.js");

it ('Capitalization Test', () => {
    expect(capitalize("test")).toBe("Test");
    expect(capitalize("Test")).toBe("Test");
    expect(capitalize("tset")).toBe("Tset");
})