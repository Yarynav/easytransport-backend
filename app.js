const app = require('./server')
app.use('/client', require('./src/routes/ClientRoutes'))
app.use('/transport', require('./src/routes/TransportRoutes'))
app.use('/trip', require('./src/routes/TripRoutes'))
// app.use('/shipping', require('./src/routes/ShippingRoutes'));
// app.use('/truck', require('./src/routes/TruckRoutes'));
app.get('*', (req, res) => {
  res.status(404).send('Page not found')
})

module.exports = app
