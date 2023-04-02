const express = require('express')
const router = express.Router()
const ShippingController = require('../controllers/ShippingController')
const { loggerMiddleware } = require('../middlewares/LoggerMiddleware')
const { loginMiddleware } = require('../middlewares/LoginMiddleware')
const { shippingMiddleware } = require('../middlewares/ShippingMiddleware')
const middlewares = [loggerMiddleware, loginMiddleware]

/** @description Obtiene todos los viajes relacionados a un cliente  */
router.get('/byClient', middlewares, ShippingController.getByClientId)
router.put('/:id', middlewares, ShippingController.update)
router.get('/:id', middlewares, ShippingController.getById)
router.post(
  '/',

  shippingMiddleware,
  ShippingController.create
)

module.exports = router
