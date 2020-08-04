const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const favouriteController = require('../controllers/favouriteController');

// '/favourite => GET'
router.get('/getFavourite', favouriteController.getFavourite);

// '/favourite => POST'
router.post('/addFavourite', favouriteController.saveFavourite);

// '/favourite => DELETE'
router.delete('/removeFavourite', favouriteController.deleteFavourite);


module.exports = router;