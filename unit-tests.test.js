const capitalize = require("./capitalize");
const reverseString = require("./reverse-string");
const Calculator = require("./calculator");
const calc = new Calculator();
const caesarCipher = require("./caesar-cipher"); 

it ('Capitalization Test', () => {
    expect(capitalize("test")).toBe("Test");
    expect(capitalize("Test")).toBe("Test");
    expect(capitalize("tset")).toBe("Tset");
})

it ("Reverse String Test", () => {
    expect(reverseString("test")).toBe("tset");
})

it ("Calculator - Add Test", () => {
    expect(calc.add(2,2)).toBe(4);
})

it ("Calculator - Subtrack Test", () => {
    expect(calc.subtract(4,2)).toBe(2);
})

it ("Calculator - Multiply Test", () => {
    expect(calc.multiply(4,2)).toBe(8);
})

it ("Calculator - Divide Test", () => {
    expect(calc.divide(4,2)).toBe(2);
})

it ("Caesar Cipher Test", () => {
    expect(caesarCipher(test, 1)).toBe("uftu");
})