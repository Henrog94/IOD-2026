const axios = require('axios');

const API_URL = 'https://fakestoreapi.com/products';

async function getProducts(req, res) {
    try {
        const response = await axios.get(API_URL);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Unable to retrieve products.' });
    }
}

async function getProductsByCategory(req, res) {
    try {
        const category = encodeURIComponent(req.params.category);
        const response = await axios.get(`${API_URL}/category/${category}`);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Unable to retrieve products by category.' });
    }
}

async function getProductById(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({ error: 'Product ID must be a number.' });
        }

        const response = await axios.get(`${API_URL}/${id}`);
        res.json(response.data);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        console.error(error.message);
        res.status(500).json({ error: 'Unable to retrieve product.' });
    }
}

module.exports = { getProducts, getProductsByCategory, getProductById };
