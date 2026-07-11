//Middleware  de Validacion  funcion Higher-Order Function
export const validateSchema = (schema) => {

    return (req, res, next) =>{
        const resultado = schema.safeParse(req.body);
        if(!resultado.sucess){
        return res.status(400).json({
            status: "Error",
            errors: resultado.error.errors.map(err =>({
                campo: err.path.join('.'),
                mensaje: err.message
            }))
        })
        }
        req.body = resultado.data
        next()

    }
}