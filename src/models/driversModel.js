const pool = require('../../config/database');

exports.getAllDrivers = () => {
    return pool.query('SELECT * FROM drivers');
};

exports.getDriverById = (id) => {
    return pool.query('SELECT * FROM drivers WHERE id = ?', [id]);
};

exports.createDriver = (name) => {
    return pool.query('INSERT INTO drivers (name) VALUES (?)', [name]);
};

exports.updateDriverById = (id, name) => {
    return pool.query('UPDATE drivers SET name = ? WHERE id = ?', [name, id]);
};

exports.deleteDriverById = (id) => {
    return pool.query('DELETE FROM drivers WHERE id = ?', [id]);
};
