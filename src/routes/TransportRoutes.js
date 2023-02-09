const express = require('express');
const router = express.Router();
const TransportController = require('../controllers/TransportController');
const { loggerMiddleware } = require('../middlewares/LoggerMiddleware');
const middlewares = [loggerMiddleware];

/** @description Iniciar sesión como un transportista  */
router.post('/login', loggerMiddleware, TransportController.login);

/** @description Crear una cuenta para transportista  */
router.post('/signin', loggerMiddleware, TransportController.signin);

/** @description Listado de todos los transportistas */
router.get('/', middlewares, TransportController.list);

/** @description Obtener información de un transportista específico a través de su id */
router.get('/:id', middlewares, TransportController.getById);

/** @description Eliminar de manera lógica un transportista */
router.delete('/:id', middlewares, TransportController.remove);

module.exports = router;
