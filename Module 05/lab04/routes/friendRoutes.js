const express = require('express');
const router = express.Router();

let friends = [
    { id: 1, name: 'Alice', age: 24, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 28, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 22, email: 'charlie@example.com' },
    { id: 4, name: 'David', age: 31, email: 'david@example.com' },
    { id: 5, name: 'Emma', age: 26, email: 'emma@example.com' }
];

// Part 1: filter by starting letter
router.get('/filter', (req, res) => {
    const letter = req.query.letter;

    if (!letter || typeof letter !== 'string' || letter.length !== 1 || !/^[a-zA-Z]$/.test(letter)) {
        return res.status(400).json({
            error: 'Please provide one letter using the letter query parameter.'
        });
    }

    const filtered = friends.filter(friend =>
        friend.name.toLowerCase().startsWith(letter.toLowerCase())
    );

    res.status(200).json(filtered);
});

// Part 2: return only requested headers
router.get('/info', (req, res) => {
    res.status(200).json({
        'user-agent': req.get('user-agent') || null,
        'content-type': req.get('content-type') || null,
        'accept': req.get('accept') || null
    });
});

// Part 3: dynamic ID route
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({ error: 'Friend ID must be a number.' });
    }

    const friend = friends.find(friend => friend.id === id);

    if (!friend) {
        return res.status(404).json({ error: 'Friend not found.' });
    }

    res.status(200).json(friend);
});

// Part 4: PUT update
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({ error: 'Friend ID must be a number.' });
    }

    const friend = friends.find(friend => friend.id === id);

    if (!friend) {
        return res.status(404).json({ error: 'Friend not found.' });
    }

    const { name, age, email } = req.body;

    if (name !== undefined && (typeof name !== 'string' || name.trim() === '')) {
        return res.status(400).json({ error: 'Name must be a non-empty string.' });
    }

    if (age !== undefined && (!Number.isInteger(age) || age < 0)) {
        return res.status(400).json({ error: 'Age must be a non-negative integer.' });
    }

    if (email !== undefined && (typeof email !== 'string' || !email.includes('@'))) {
        return res.status(400).json({ error: 'Email must be a valid email address.' });
    }

    if (name !== undefined) friend.name = name.trim();
    if (age !== undefined) friend.age = age;
    if (email !== undefined) friend.email = email.trim();

    res.status(200).json({
        message: 'Friend updated successfully.',
        friend
    });
});

module.exports = router;
