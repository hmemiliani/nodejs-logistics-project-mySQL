const express = require('express');
const router = express.Router();
const shipmentsController = require('../controllers/shipmentsController');

router.get('/', shipmentsController.getAllShipments);
router.get('/:id', shipmentsController.getShipmentById);
router.post('/', shipmentsController.createShipment);
router.put('/:id', shipmentsController.updateShipmentById);
router.delete('/:id', shipmentsController.deleteShipmentById);

module.exports = router;
