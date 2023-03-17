const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const CsbInspector = require('csb-inspector')
const { serverPort } = require('./src/config/globalContants')
CsbInspector()
/**********************************Levanta el Servidor***************************************/
app.listen(serverPort, () => {
  console.log('SERVIDOR ENCENDIDO EN EL PUERTO ' + serverPort)
})
module.exports = app
