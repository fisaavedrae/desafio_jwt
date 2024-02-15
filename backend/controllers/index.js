const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const { createUsuario, readUsuario, verificaSiExisteCorreo, verificarCredenciales } = require("../database/consultas");

const getUsuarioController = async (req, res, next) => {
    const { data } = req;
    const { email, dataValid } = data;
    //console.log("email", email)
    try {
        if (dataValid) {
            const post_query = await readUsuario(email);
            if (post_query != "") {
                res.status(200).json(post_query)
            }
            else {
                res.status(400).json({
                    status: 'Bad Request',
                    message: 'No se pudo obtener el usuario',
                });
            }
        }
    } catch (error) {
        next(error);
    }
}
const postUsuariosController = async (req, res, next) => {
    const { data } = req;
    const { email, password, rol, lenguaje, dataValid } = data;
    try {
        if (dataValid) {
            const passwordEncriptada = bcrypt.hashSync(password)
            const post_query = await createUsuario(email, passwordEncriptada, rol, lenguaje);
            //console.log(post_query)
            if (post_query != "" && post_query != undefined) {
                res.status(200).json({
                    status: 'Success',
                    message: 'Usuario Creado con exito',
                    usuario: post_query,
                });
            }
            else {
                res.status(400).json({
                    status: 'Bad Request',
                    message: 'No se pudo crear el usuario',
                });
            }
        }
    } catch (error) {
        next(error);
    }
};

const postAuthController = async (req, res, next) => {
    const { data } = req;
    const { email, password, dataValid } = data;
    //console.log(email, password, dataValid)
    try {
        if (dataValid) {
            const query = await verificarCredenciales(email, password);
            const { passwordencriptada } = query
            //console.log("passwordEncriptada", passwordencriptada, " passwordX", password, "query", query)
            if (passwordencriptada != "" && passwordencriptada != undefined) {
                const passwordEsCorrecta = bcrypt.compareSync(password, passwordencriptada)
                if (passwordEsCorrecta) {
                    const token = jwt.sign({ email }, "az_AZ")
                    res.send(token)
                }
                else {
                    res.status(400).json({
                        status: 'Bad Request',
                        message: 'Credenciales incorrectas',
                    });
                }
            }
            else {
                res.status(400).json({
                    status: 'Bad Request',
                    message: 'No se encontró ningún usuario con estas credenciales',
                });
            }
        }
    } catch (error) {
        next(error);
        res.status(error.code || 500).send(error)
    }
}

module.exports = {
    getUsuarioController, postUsuariosController, postAuthController
};