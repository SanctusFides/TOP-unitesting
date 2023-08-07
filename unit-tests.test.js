const capitalize = require("./capitalize.js");
const reverseString = require("./reverse-string.js");

it ('Capitalization Test', () => {
    expect(capitalize("test")).toBe("Test");
    expect(capitalize("Test")).toBe("Test");
    expect(capitalize("tset")).toBe("Tset");
})

it ("Reverse String Test", () => {
    expect(reverseString("test")).toBe("tset");
})