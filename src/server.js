require('dotenv').config();
const express = require('express');
const warehousesRoutes = require('./routes/warehousesRoutes');
const shipmentsRoutes = require('./routes/shipmentsRoutes');
const driversRoutes = require('./routes/driversRoutes');
const vehiclesRoutes = require('./routes/vehiclesRoutes');


const app = express();

//middleware para parsear JSON
app.use(express.json());

app.use('/warehouses', warehousesRoutes);
app.use('/shipments', shipmentsRoutes)
app.use('/drivers', driversRoutes);
app.use('/vehicles', vehiclesRoutes);

app.get('/', (_, res) => {
    res.send('la API de gestion logistica esta funcionando!!!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

