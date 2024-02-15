const express = require("express");
const router = express.Router();

const { getUsuarioController, postUsuariosController, postAuthController } = require("../controllers");
const { getUsuarioMiddleware, postUsuariosMiddleware, postAuthMiddleware } = require("../middlewares");

router.get('/usuarios', getUsuarioMiddleware, getUsuarioController);
router.post('/usuarios', postUsuariosMiddleware, postUsuariosController);
router.post('/login', postAuthMiddleware, postAuthController);


module.exports = router;