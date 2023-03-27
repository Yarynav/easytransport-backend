const express = require('express');
const router = express.Router();
const ShippingController = require('../controllers/ShippingController');
const { loggerMiddleware } = require('../middlewares/LoggerMiddleware');
const { loginMiddleware } = require('../middlewares/LoginMiddleware');
const { shippingMiddleware } = require('../middlewares/ShippingMiddleware');
const middlewares = [loggerMiddleware, loginMiddleware];
const createMiddlewares = [...middlewares, shippingMiddleware];

/** @description Obtiene todos los viajes relacionados a un cliente  */
router.get('/byClient', middlewares, ShippingController.getByClientId);
router.put('/:id', middlewares, ShippingController.update);
router.get('/:id', middlewares, ShippingController.getById);
router.post('/', createMiddlewares, ShippingController.create);

module.exports = router;
