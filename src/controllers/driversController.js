const driverModel = require('../models/driversModel');


exports.getAllDrivers = async (req, res) => {
    try {
        const [rows] = await driverModel.getAllDrivers();
        res.json(rows);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.getDriverById = async (req, res) => {
    try {
        const [rows] = await driverModel.getDriverById(req.params.id);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send('Not Found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.createDriver = async (req, res) => {
    try {
        const { name } = req.body;
        const [result] = await driverModel.createDriver(name);
        const [driverAdded] = await driverModel.getDriverById(result.insertId);
        res.status(201).send({ 
            message: 'Successfully created', 
            driver: driverAdded 
        });
    } catch (error) {
        res.status(500).send('Server error');
        console.log(error);
    }
};

exports.updateDriverById = async (req, res) => {
    try {
        const { name } = req.body;
        const [result] = await driverModel.updateDriverById(req.params.id, name);
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

exports.deleteDriverById = async (req, res) => {
    try {
        const [result] = await driverModel.deleteDriverById(req.params.id);
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
