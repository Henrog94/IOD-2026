let friends = [
    { id: 1, name: 'Alice', age: 24, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 28, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 22, email: 'charlie@example.com' },
    { id: 4, name: 'David', age: 31, email: 'david@example.com' },
    { id: 5, name: 'Emma', age: 26, email: 'emma@example.com' }
];

function filterFriends(req, res) {
    const letter = req.query.letter;

    if (!letter || typeof letter !== 'string' || letter.length !== 1 || !/^[a-zA-Z]$/.test(letter)) {
        return res.status(400).json({ error: 'Provide one letter.' });
    }

    res.json(friends.filter(friend =>
        friend.name.toLowerCase().startsWith(letter.toLowerCase())
    ));
}

function getHeaders(req, res) {
    res.json({
        'user-agent': req.get('user-agent') || null,
        'content-type': req.get('content-type') || null,
        'accept': req.get('accept') || null
    });
}

function getFriend(req, res) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid ID.' });

    const friend = friends.find(friend => friend.id === id);
    if (!friend) return res.status(404).json({ error: 'Friend not found.' });

    res.json(friend);
}

function updateFriend(req, res) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: 'Invalid ID.' });

    const friend = friends.find(friend => friend.id === id);
    if (!friend) return res.status(404).json({ error: 'Friend not found.' });

    const { name, age, email } = req.body;

    if (name !== undefined && (typeof name !== 'string' || !name.trim())) {
        return res.status(400).json({ error: 'Invalid name.' });
    }

    if (age !== undefined && (!Number.isInteger(age) || age < 0)) {
        return res.status(400).json({ error: 'Invalid age.' });
    }

    if (email !== undefined && (typeof email !== 'string' || !email.includes('@'))) {
        return res.status(400).json({ error: 'Invalid email.' });
    }

    if (name !== undefined) friend.name = name.trim();
    if (age !== undefined) friend.age = age;
    if (email !== undefined) friend.email = email.trim();

    res.json({ message: 'Friend updated successfully.', friend });
}

module.exports = { filterFriends, getHeaders, getFriend, updateFriend };
