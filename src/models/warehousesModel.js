const pool = require('../../config/database');

exports.getAllWarehouses = () => {
    return pool.query('SELECT * FROM warehouses');
};

exports.getWarehouseById = (id) => {
    return pool.query('SELECT * FROM warehouses WHERE id = ?', [id]);
};

exports.createWarehouse = (name, location) => {
    return pool.query('INSERT INTO warehouses (name, location) VALUES (?, ?)', [name, location]);
};

exports.updateWarehouseById = (id, name, location) => {
    return pool.query('UPDATE warehouses SET name = ?, location = ? WHERE id = ?', [name, location, id]);
};

exports.deleteWarehouseById = (id) => {
    return pool.query('DELETE FROM warehouses WHERE id = ?', [id]);
};
