const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');

// '/property => GET'
router.get('/getAllFaqs', faqController.getFAQs);

module.exports = router;
