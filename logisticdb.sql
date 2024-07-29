CREATE DATABASE IF NOT EXISTS logisticDB;
USE logisticDB;

CREATE TABLE warehouses(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL
);

CREATE TABLE shipments(
	id INT AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    warehouse_id INT,
    FOREIGN KEY (warehouse_id) REFERENCES warehouses(id)
);

CREATE TABLE drivers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE vehicles(
	id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    driver_id INT,
    FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

CREATE TABLE driverwarehouse(
	vehicle_id INT,
    warehouse_id INT,
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(id),
    FOREIGN KEY (warehouse_id) REFERENCES warehouses(id),
    PRIMARY KEY (vehicle_id, warehouse_id)
);


SHOW TABLES;


SELECT * FROM warehouses;
