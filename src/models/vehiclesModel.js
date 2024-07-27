const pool = require('../../config/database');

exports.getAllVehicles = () => {
    return pool.query('SELECT * FROM vehicles');
};

exports.getVehicleById = (id) => {
    return pool.query('SELECT * FROM vehicles WHERE id = ?', [id]);
};

exports.createVehicle = (model, year, driver_id) => {
    return pool.query('INSERT INTO vehicles (model, year, driver_id) VALUES (?, ?, ?)', [model, year, driver_id]);
};

exports.updateVehicleById = (id, model, year, driver_id) => {
    return pool.query('UPDATE vehicles SET model = ?, year = ?, driver_id = ? WHERE id = ?', [model, year, driver_id, id]);
};

exports.deleteVehicleById = (id) => {
    return pool.query('DELETE FROM vehicles WHERE id = ?', [id]);
};
