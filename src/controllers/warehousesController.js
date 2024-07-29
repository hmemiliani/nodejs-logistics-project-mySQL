const warehouseModel = require('../models/warehousesModel');

// Obtener todo
exports.getAllWarehouses = async (req, res) => {
    try {
        const [rows] = await warehouseModel.getAllWarehouses();
        res.json(rows);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Obtener por ID
exports.getWarehouseById = async (req, res) => {
    try {
        const [rows] = await warehouseModel.getWarehouseById(req.params.id);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send('Not Found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Crear
exports.createWarehouse = async (req, res) => {
    try {
        const { name, location } = req.body;
        const [result] = await warehouseModel.createWarehouse(name, location);
        const [warehouseAdded] = await warehouseModel.getWarehouseById(result.insertId);
        res.status(201).send({ 
            message: 'Successfully created', 
            warehouse: warehouseAdded 
        });
    } catch (error) {
        res.status(500).send('Server error');
        console.log(error);
    }
};

// Actualizar
exports.updateWarehouseById = async (req, res) => {
    try {
        const { name, location } = req.body;
        const [result] = await warehouseModel.updateWarehouseById(req.params.id, name, location);
        if (result.affectedRows) {
            res.send({ 
                message: 'Updated successfully' 
            });
        } else {
            res.status(404).send('Not Found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Eliminar por ID
exports.deleteWarehouseById = async (req, res) => {
    try {
        const [result] = await warehouseModel.deleteWarehouseById(req.params.id);
        if (result.affectedRows) {
            res.send({ 
                message: 'Successfully removed' 
            });
        } else {
            res.status(404).send('Not Found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
};
