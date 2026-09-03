const express = require('express');
const friendRoutes = require('./routes/friendRoutes');

const app = express();
const port = 3003;

app.use(express.json());
app.use('/friends', friendRoutes);

app.listen(port, () => {
    console.log(`Exercise 5 MVC app listening at http://localhost:${port}`);
});
