const express = require('express');
const controller = require('../controllers/productController');

const router = express.Router();

router.get('/', controller.getProducts);
router.get('/category/:category', controller.getProductsByCategory);
router.get('/:id', controller.getProductById);

module.exports = router;
