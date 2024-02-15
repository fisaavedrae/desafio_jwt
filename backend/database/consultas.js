const pool = require("./index");

const createUsuario = async (email, password, rol, lenguaje) => {
    try {
        const consulta = "INSERT INTO usuarios ( email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *"
        const values = [email, password, rol, lenguaje]
        const { rows } = await pool.query(consulta, values)
        console.log('Usuario creado con exito')
        return rows
    } catch (error) {
        console.log(error)
    }
}

const readUsuario = async (email) => {
    try {
        const consulta = "select email, password, rol, lenguage FROM usuarios WHERE email = $1"
        //console.log(consulta)
        const values = [email]
        const { rows } = await pool.query(consulta, values)
        console.log('Usuario encontrado con exito')
        return rows
    } catch (error) {
        console.log(error)
    }
}


const verificaSiExisteCorreo = async (email) => {
    try {
        const consulta = "SELECT * FROM usuarios WHERE email = $1 "
        const values = [email]
        const { rows } = await pool.query(consulta, values)
        return rows
    } catch (error) {
        console.log(error)
    }
}

const verificarCredenciales = async (email, password) => {
    try {
        const consulta = "SELECT password AS passwordEncriptada FROM usuarios WHERE email = $1 "
        const values = [email]
        const { rows: [usuario] } = await pool.query(consulta, values)
        return usuario
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = {
    createUsuario,
    readUsuario,
    verificaSiExisteCorreo,
    verificarCredenciales
}
