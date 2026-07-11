//Middleware de Logging Global

export const requestLogger = (req, res, next) =>{
    const fechaHora = new Date().toISOString()
    console.log(`[${fechaHora}] ${req.method} - ${req.originalUrl} - Body:`, JSON.stringify(req.body))
    
    next()
}


//Middleware de Manejo de Erroes Globales
export const errorHandler = (err, req, res, next) =>{

    console.error("Error capturado en el servidor", err.stack)
    res.status(500).json({
        status:"Errorr",
        message: "Internal Server Errror"
    })
}

