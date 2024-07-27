const express = require('express');
const router = express.Router();
const warehousesController = require('../controllers/warehousesController');

router.get('/', warehousesController.getAllWarehouses);
router.get('/:id', warehousesController.getWarehouseById);
router.post('/', warehousesController.createWarehouse);
router.put('/:id', warehousesController.updateWarehouseById);
router.delete('/:id', warehousesController.deleteWarehouseById);

module.exports = router;
