const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Server 1 on port 3000!');
});

app.listen(port, () => {
    console.log(`Server 1 listening at http://localhost:${port}`);
});
