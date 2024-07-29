const shipmentModel = require('../models/shipmentsModel');


exports.getAllShipments = async (req, res) => {
    try {
        const [rows] = await shipmentModel.getAllShipments();
        res.json(rows);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.getShipmentById = async (req, res) => {
    try {
        const [rows] = await shipmentModel.getShipmentById(req.params.id);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).send('Not Found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.createShipment = async (req, res) => {
    try {
        const { item, quantity, warehouse_id } = req.body;
        const [result] = await shipmentModel.createShipment(item, quantity, warehouse_id);
        const [shipmentAdded] = await shipmentModel.getShipmentById(result.insertId);
        res.status(201).send({ 
            message: 'Successfully created', 
            shipment: shipmentAdded 
        });
    } catch (error) {
        res.status(500).send('Server error');
        console.log(error);
    }
};

exports.updateShipmentById = async (req, res) => {
    try {
        const { item, quantity, warehouse_id } = req.body;
        const [result] = await shipmentModel.updateShipmentById(req.params.id, item, quantity, warehouse_id);
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


exports.deleteShipmentById = async (req, res) => {
    try {
        const [result] = await shipmentModel.deleteShipmentById(req.params.id);
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