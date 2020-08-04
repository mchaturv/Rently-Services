const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationsController');

// '/property => GET'
router.post('/getAllNotifications', notificationController.getNotifications);
router.post('/createNotification', notificationController.createNotification);
router.post('/updateNotification', notificationController.updateNotification);

module.exports = router;
