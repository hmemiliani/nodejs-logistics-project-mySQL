const pool = require('../../config/database');

exports.getAllShipments = () => {
    return pool.query('SELECT * FROM shipments');
};

exports.getShipmentById = (id) => {
    return pool.query('SELECT * FROM shipments WHERE id = ?', [id]);
};

exports.createShipment = (item, quantity, warehouse_id) => {
    return pool.query('INSERT INTO shipments (item, quantity, warehouse_id) VALUES (?, ?, ?)', [item, quantity, warehouse_id]);
};

exports.updateShipmentById = (id, item, quantity, warehouse_id) => {
    return pool.query('UPDATE shipments SET item = ?, quantity = ?, warehouse_id = ? WHERE id = ?', [item, quantity, warehouse_id, id]);
};

exports.deleteShipmentById = (id) => {
    return pool.query('DELETE FROM shipments WHERE id = ?', [id]);
};
