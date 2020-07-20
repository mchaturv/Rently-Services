const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const { json } = require('body-parser');
const propertyController = require('../controllers/propertyController');

// '/property => GET'
router.get('/allProperties', propertyController.getProducts);

// '/add-product => POST'
//router.post('/add-property', propertyController.postAddProduct);

//router.get('/edit-property/:propertyId', propertyController.getEditProduct);
//router.post('/edit-property', propertyController.postEditProduct);
//router.post('/delete-property', propertyController.postDeleteProduct);

module.exports = router;