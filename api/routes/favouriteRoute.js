const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const favouriteController = require('../controllers/favouriteController');

// '/favourite => GET'
router.get('/', favouriteController.getFavourite);

// '/favourite => POST'
router.post('/', favouriteController.saveFavourite);

// '/favourite => DELETE'
router.delete('/', favouriteController.deleteFavourite);


module.exports = router;