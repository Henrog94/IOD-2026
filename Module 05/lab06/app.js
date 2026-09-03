const express = require('express');
const app = express();

app.use(express.json());

app.get('/add', (req, res) => {
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: a + b });
});

app.get('/subtract', (req, res) => {
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: a - b });
});

app.get('/multiply', (req, res) => {
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: a * b });
});

app.get('/divide', (req, res) => {
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    if (b === 0) return res.status(400).json({ error: 'Cannot divide by zero' });
    res.json({ result: a / b });
});

module.exports = app;
