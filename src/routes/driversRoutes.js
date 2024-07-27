const express = require('express');
const router = express.Router();
const driversController = require('../controllers/driversController');

router.get('/', driversController.getAllDrivers);
router.get('/:id', driversController.getDriverById);
router.post('/', driversController.createDriver);
router.put('/:id', driversController.updateDriverById);
router.delete('/:id', driversController.deleteDriverById);

module.exports = router;
