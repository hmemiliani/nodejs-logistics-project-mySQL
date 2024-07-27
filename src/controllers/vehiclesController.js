const vehicleModel = require('../models/vehiclesModel');

// Obtener todos los vehículos
exports.getAllVehicles = async (req, res) => {
    try {
        const [rows] = await vehicleModel.getAllVehicles();
        res.json(rows);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Obtener un vehículo por ID
exports.getVehicleById = async (req, res) => {
    try {
        const [rows] = await vehicleModel.getVehicleById(req.params.id);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send('Not Found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Crear un nuevo vehículo
exports.createVehicle = async (req, res) => {
    try {
        const { model, year, driver_id } = req.body;
        const [result] = await vehicleModel.createVehicle(model, year, driver_id);
        const [vehicleAdded] = await vehicleModel.getVehicleById(result.insertId);
        res.status(201).send({ 
            message: 'Successfully created', 
            vehicle: vehicleAdded 
        });
    } catch (error) {
        res.status(500).send('Server error');
        console.log(error);
    }
};

// Actualizar un vehículo por ID
exports.updateVehicleById = async (req, res) => {
    try {
        const { model, year, driver_id } = req.body;
        const [result] = await vehicleModel.updateVehicleById(req.params.id, model, year, driver_id);
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

// Eliminar un vehículo por ID
exports.deleteVehicleById = async (req, res) => {
    try {
        const [result] = await vehicleModel.deleteVehicleById(req.params.id);
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
