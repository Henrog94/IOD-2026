const app = require('./app');

const port = 3006;

app.listen(port, () => {
    console.log(`Exercise 8 Fake Store app listening at http://localhost:${port}`);
    console.log(`Swagger documentation at http://localhost:${port}/api-docs`);
});
