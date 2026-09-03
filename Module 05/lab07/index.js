const express = require('express');
const Calculator = require('./libraries/Calculator');

const app = express();
const calculator = new Calculator();
const port = 3005;

app.get('/add', (req, res) => {
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if (!Number.isFinite(a) || !Number.isFinite(b)) return res.status(400).json({ error: 'Invalid numbers' });
    res.json({ calculatorId: calculator.id, result: calculator.add(a, b) });
});

app.get('/subtract', (req, res) => {
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if (!Number.isFinite(a) || !Number.isFinite(b)) return res.status(400).json({ error: 'Invalid numbers' });
    res.json({ calculatorId: calculator.id, result: calculator.subtract(a, b) });
});

app.get('/multiply', (req, res) => {
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if (!Number.isFinite(a) || !Number.isFinite(b)) return res.status(400).json({ error: 'Invalid numbers' });
    res.json({ calculatorId: calculator.id, result: calculator.multiply(a, b) });
});

app.get('/divide', (req, res) => {
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if (!Number.isFinite(a) || !Number.isFinite(b)) return res.status(400).json({ error: 'Invalid numbers' });
    if (b === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
    res.json({ calculatorId: calculator.id, result: calculator.divide(a, b) });
});

app.listen(port, () => {
    console.log(`Exercise 7 listening at http://localhost:${port}`);
    console.log(`Calculator instance ID: ${calculator.id}`);
});
