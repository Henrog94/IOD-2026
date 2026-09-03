const express = require('express');
const app = express();
const port = 3000;

function getNumbers(req, res) {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        res.status(400).json({
            error: 'num1 and num2 must be valid numbers'
        });
        return null;
    }

    return { num1, num2 };
}

app.get('/add', (req, res) => {
    const numbers = getNumbers(req, res);
    if (!numbers) return;

    res.json({ result: numbers.num1 + numbers.num2 });
});

app.get('/subtract', (req, res) => {
    const numbers = getNumbers(req, res);
    if (!numbers) return;

    res.json({ result: numbers.num1 - numbers.num2 });
});

app.get('/multiply', (req, res) => {
    const numbers = getNumbers(req, res);
    if (!numbers) return;

    res.json({ result: numbers.num1 * numbers.num2 });
});

app.get('/divide', (req, res) => {
    const numbers = getNumbers(req, res);
    if (!numbers) return;

    if (numbers.num2 === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }

    res.json({ result: numbers.num1 / numbers.num2 });
});

app.listen(port, () => {
    console.log(`Exercise 2 calculator listening at http://localhost:${port}`);
});
