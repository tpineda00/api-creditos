// Middleware de validación (Higher-Order Function)

export const validate = (schema) => {
    return (req, res, next) => {
        const resultado = schema.safeParse(req.body);

        if (!resultado.success) {
            return res.status(400).json({
                status: "Error",
                message: "Validación de datos fallida.",
                errors: resultado.error.issues.map((err) => ({
                    campo: err.path.join("."),
                    mensaje: err.message
                }))
            });
        }

        // Reemplaza el body con los datos ya validados
        req.body = resultado.data;

        next();
    };
};