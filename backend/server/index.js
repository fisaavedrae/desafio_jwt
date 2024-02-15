const express = require('express')
const app = express()
const routes = require('../routes/index')
const cors = require('cors')

const PORT = process.env.PORT || 3000

//middleware
app.use(cors())
app.use(express.json())
app.use('/', routes)



app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))