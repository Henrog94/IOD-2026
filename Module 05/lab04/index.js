const express = require('express');
const friendRoutes = require('./routes/friendRoutes');

const app = express();
const port = 3002;

app.use(express.json());

app.use('/', express.static('public'));
app.use('/friends', friendRoutes);

app.listen(port, () => {
    console.log(`Friends app listening at http://localhost:${port}`);
});
