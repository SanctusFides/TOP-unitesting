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

it ("Caesar Cipher - By 1", () => {
    expect(caesarCipher("hello", 1)).toBe("ifmmp");
})

it ("Caesar Cipher - By 2", () => {
    expect(caesarCipher("hello", 2)).toBe("jgnnq");
})

it ("Caesar Cipher - Cap By 1", () => {
    expect(caesarCipher("HELLO", 1)).toBe("IFMMP");
})

it ("Caesar Cipher - Cap By 2", () => {
    expect(caesarCipher("HELLO", 2)).toBe("JGNNQ");
})

it ("Caesar Cipher - Z & 0 Test", () => {
    expect(caesarCipher("z", 0)).toBe("z");
    expect(caesarCipher("Z", 0)).toBe("Z");
})

it ("Caesar Cipher - Z & 1", () => {
    expect(caesarCipher("z", 1)).toBe("a");
    expect(caesarCipher("Z", 1)).toBe("A");
})

it ("Caesar Cipher - y & 3", () => {
    expect(caesarCipher("y", 3)).toBe("b");
    expect(caesarCipher("Y", 3)).toBe("B");
})