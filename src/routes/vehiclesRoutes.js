const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehiclesController');

router.get('/', vehiclesController.getAllVehicles);
router.get('/:id', vehiclesController.getVehicleById);
router.post('/', vehiclesController.createVehicle);
router.put('/:id', vehiclesController.updateVehicleById);
router.delete('/:id', vehiclesController.deleteVehicleById);

module.exports = router;