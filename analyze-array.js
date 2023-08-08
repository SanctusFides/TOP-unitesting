module.exports = class analyzeArray {

    constructor(array) {
        this.numArray = array;
    }

    average() {
        let sum = 0;
        for (let i = 0; i < this.numArray.length; i++) {
            sum += this.numArray[i];
        }
        return sum / this.numArray.length;
    }

    min() {
        let min = this.numArray[0];
        for (let i = 1; i < this.numArray.length; i++) {
            if (this.numArray[i] < min) {
                min = this.numArray[i];
            }
        }
        return min;
    }

    max() {
        let max = this.numArray[0];
        for (let i = 1; i < this.numArray.length; i++) {
            if (this.numArray[i] > max) {
                max = this.numArray[i];
            }
        }
        return max;
    }

    length() {
        return this.numArray.length;
    }
}
