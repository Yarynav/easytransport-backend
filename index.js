const express = require('express');
const app = express();
const cors = require('cors');
const { serverPort } = require('./src/config/globalContants');

app.use(express.json());
app.use(cors());
app.listen(
  serverPort,
  console.log('SERVIDOR ENCENDIDO EN EL PUERTO ' + serverPort)
);
app.use('/client', require('./src/routes/ClientRoutes'));
app.use('/transport', require('./src/routes/TransportRoutes'));
// app.use('/shipping', require('./src/routes/ShippingRoutes'));
// app.use('/trip', require('./src/routes/TripRoutes'));
// app.use('/truck', require('./src/routes/TruckRoutes'));

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});
