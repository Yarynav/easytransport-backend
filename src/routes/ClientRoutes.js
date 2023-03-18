const express = require('express')
const router = express.Router()
const ClientController = require('../controllers/ClientController')
const { loggerMiddleware } = require('../middlewares/LoggerMiddleware')
const { loginMiddleware } = require('../middlewares/LoginMiddleware')
const middlewares = [loggerMiddleware, loginMiddleware]

/** @description Iniciar sesión como un cliente  */
router.post('/login', loggerMiddleware, ClientController.login)

/** @description Crear una cuenta para cliente  */
router.post('/signin', loggerMiddleware, ClientController.signin)

/** @description Listado de todos los clientes */
router.get('/', middlewares, ClientController.list)

/** @description Obtener información de un cliente específico a través de su id */
router.get('/:id', middlewares, ClientController.getById)

/** @description Eliminar de manera lógica un cliente */
router.delete('/:id', middlewares, ClientController.remove)

/** @description Modificar la información de un cliente */
router.put('/:id', middlewares, ClientController.update)

module.exports = router
