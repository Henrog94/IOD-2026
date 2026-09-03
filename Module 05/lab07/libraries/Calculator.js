const { randomUUID } = require('crypto');
const Logger = require('./Logger');

class Calculator {
    constructor() {
        this.id = randomUUID();
        this.logger = new Logger();
    }

    add(a, b) {
        const result = a + b;
        this.logger.log(this.id, `${a} + ${b}`, result);
        return result;
    }

    subtract(a, b) {
        const result = a - b;
        this.logger.log(this.id, `${a} - ${b}`, result);
        return result;
    }

    multiply(a, b) {
        const result = a * b;
        this.logger.log(this.id, `${a} * ${b}`, result);
        return result;
    }

    divide(a, b) {
        if (b === 0) throw new Error('Cannot divide by zero');
        const result = a / b;
        this.logger.log(this.id, `${a} / ${b}`, result);
        return result;
    }
}

module.exports = Calculator;
