const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello from Server 2 on port 3001!');
});

app.listen(port, () => {
    console.log(`Server 2 listening at http://localhost:${port}`);
});
