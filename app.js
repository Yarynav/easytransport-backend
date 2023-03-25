const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/client', require('./src/routes/ClientRoutes'));
app.use('/transport', require('./src/routes/TransportRoutes'));
app.use('/trip', require('./src/routes/TripRoutes'));
app.use('/shipping', require('./src/routes/ShippingRoutes'));

// app.use('/shipping', require('./src/routes/ShippingRoutes'));
// app.use('/truck', require('./src/routes/TruckRoutes'));

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app;