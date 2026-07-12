import express from "express"
import solicitudRoutes from './src/routes/solicitudes.routes.js'
import { requestLogger, errorHandler } from './src/middleware/global.middleware.js'
const app = express()

app.use(express.json())

//Aui se esta implementando el Logger Global

app.use(requestLogger)


//Rutas del negocio

app.use('/api/solicitudes', solicitudRoutes)

//Registrar el manejo de errores

app.use(errorHandler)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Servidor en marcha en: http://localhost:${PORT}`)
})