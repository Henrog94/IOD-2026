const request = require('supertest');
const app = require('../app');

describe('Calculator API', () => {
    test('adds two numbers', async () => {
        const response = await request(app).get('/add?num1=10&num2=5');
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(15);
    });

    test('subtracts two numbers', async () => {
        const response = await request(app).get('/subtract?num1=10&num2=5');
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(5);
    });

    test('multiplies two numbers', async () => {
        const response = await request(app).get('/multiply?num1=10&num2=5');
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(50);
    });

    test('divides two numbers', async () => {
        const response = await request(app).get('/divide?num1=10&num2=5');
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(2);
    });

    test('rejects division by zero', async () => {
        const response = await request(app).get('/divide?num1=10&num2=0');
        expect(response.statusCode).toBe(400);
    });
});
