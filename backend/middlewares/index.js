require("dotenv").config();
const jwt = require("jsonwebtoken")
const { verificaSiExisteCorreo } = require('../database/consultas');
const { verificaEmail } = require('../utils');

const getUsuarioMiddleware = async (req, res, next) => {

    // Aca debe ir el informe
    const parametros = req.params
    const querys = req.query
    const url = req.url
    console.log("---\n")
    console.log(` Hoy ${new Date()} Se ha recibido una consulta en la ruta GET${url} con los parámetros: `, parametros, ` y con los querys: `, querys, " body:", req.body)
    console.log("\n---\n")

    try {
        const Authorization = req.header("Authorization")
        //console.log("Authorization:", Authorization)
        if (Authorization == undefined) {
            res.status(400).json({
                status: 'Bad Request',
                message: 'No hay token',
            });
        }
        else {
            const token = Authorization.split("Bearer ")[1]
            //console.log("Token:", token)
            try {
                jwt.verify(token, process.env.SECRET)
                const { email } = jwt.decode(token)
                //console.log(email)
                if (email != "") {
                    const post_query = await verificaSiExisteCorreo(email);
                    if (post_query != "") {
                        req.data = {
                            email: email,
                            dataValid: true,
                        };
                        next();
                    }
                    else {
                        res.status(400).json({
                            status: 'Bad Request',
                            message: 'No existe el correo en la base de datos',
                        });
                    }
                }
            }
            catch (error) {
                res.status(400).json({
                    status: 'Bad Request',
                    message: 'Token invalido',
                });
                next(error);
            }
        }
    } catch (error) {
        next(error);
    }
}
const postUsuariosMiddleware = async (req, res, next) => {
    const { email, password, rol, lenguage } = req.body
    //console.log(email, password, rol, lenguage)

    // Aca debe ir el informe
    const parametros = req.params
    const querys = req.query
    const url = req.url
    console.log("---\n")
    console.log(` Hoy ${new Date()} Se ha recibido una consulta en la ruta POST${url} con los parámetros: `, parametros, ` y con los querys: `, querys, " body:", req.body)
    console.log("\n---\n")


    try {

        if (email != undefined && password != undefined && rol != undefined && lenguage != undefined) {
            if (email != "" && email != undefined) {
                if (verificaEmail(email)) {
                    const post_query = await verificaSiExisteCorreo(email);
                    if (post_query == "") {
                        if (password != "" && password != undefined) {
                            if (rol != "" && rol != undefined) {
                                if (lenguage != "" && lenguage != undefined) {
                                    req.data = {
                                        email: email,
                                        password: password,
                                        rol: rol,
                                        lenguaje: lenguage,
                                        dataValid: true,
                                    };
                                    return next();
                                }
                                else {
                                    return res.status(400).json({
                                        status: 'Bad Request',
                                        message: 'Lenguaje no puede ser vacio',
                                    });
                                }
                            }
                            else {
                                return res.status(400).json({
                                    status: 'Bad Request',
                                    message: 'Rol no puede ser vacio',
                                });
                            }
                        }
                        else {
                            return res.status(400).json({
                                status: 'Bad Request',
                                message: 'Password no puede ser vacio',
                            });
                        }
                    }
                    else {
                        return res.status(400).json({
                            status: 'Bad Request',
                            message: 'Ya existe el correo en la base de datos',
                        });
                    }
                }
                else {
                    return res.status(400).json({
                        status: 'Bad Request',
                        message: 'Email no es valido',
                    });
                }
            }
            else {
                return res.status(400).json({
                    status: 'Bad Request',
                    message: 'Email no es valido',
                });
            }
        }
        else {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'El body no es correcto',
                body: req.body
            });
        }
    } catch (error) {
        next(error);
    }
};

const postAuthMiddleware = async (req, res, next) => {
    const { email, password, } = req.body
    //console.log(email, password)

    // Aca debe ir el informe
    const parametros = req.params
    const querys = req.query
    const url = req.url
    console.log("---\n")
    console.log(` Hoy ${new Date()} Se ha recibido una consulta en la ruta POST${url} con los parámetros: `, parametros, ` y con los querys: `, querys, " body:", req.body)
    console.log("\n---\n")

    try {
        if (email != undefined && password != undefined) {
            if (email != "" && email != undefined) {
                // Validar consistencia de email
                if (verificaEmail(email)) {
                    const post_query = await verificaSiExisteCorreo(email);
                    if (post_query != "") {
                        if (password != "" && password != undefined) {
                            req.data = {
                                email: email,
                                password: password,
                                dataValid: true,
                            };
                            next();
                        }
                        else {
                            return res.status(400).json({
                                status: 'Bad Request',
                                message: 'Password no puede ser vacio',
                            });
                        }
                    }
                    else {
                        return res.status(400).json({
                            status: 'Bad Request',
                            message: 'No existe el correo en la base de datos',
                        });
                    }
                }
                else {
                    return res.status(400).json({
                        status: 'Bad Request',
                        message: 'Email no es valido',
                    });
                }
            }
            else {
                return res.status(400).json({
                    status: 'Bad Request',
                    message: 'Email no puede ser vacio',
                });
            }
        }
        else {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'El body no es correcto',
                body: req.body
            });
        }
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    getUsuarioMiddleware, postUsuariosMiddleware, postAuthMiddleware
};
