import * as z from 'zod'

 export const solicitudSchema = z.object({
    dniCliente: z.string().min(13,{message: "El DNI tiene que tener entre 13  a 15 caracteres"}).max(15, {message: "El DNI tiene que tener entre 13  a 15 caracteres"}),
    nombreCompleto: z.string().min(5, {message: "El nombre completo debe contener al menos 5 caracteres"})
        .max(100,{mesage:" El nombre completo no puede exceederse de los 100 caracteres"}),
    montoSolicitado: z.number({ required_error: "El monto solicitado es obligatorio"}).min(1000,{message:"El monto solicitado no puede ser menor a 1000"})
        .max(100000, {mesage:"El monto solicitado no puede excedeer los 100000"}),
    plazoMeses: z.number({required_error: "El plazo en meses obligatorio"}).int({meesage:"El plazo deber ser un numero entero"})
        .min(1,{mesage:"El plazo minimo es de 1 mes"})
        .max(60,{message:"El plazo maximo no puede exceeder los 60 meses."}),
    tasaInteres: z.number().optional().default(5.0)
}).strict()

//Validacion para el cambio de estado en el Patch
 export const cambioEstadoSchema = z.object({
    estado: z.enum(["APROBADA","RECHAZADA"],{
        errorMap: ()=> ({ message: "El estaod solo puede ser 'APROBADA' o 'RECHAZADA' "})
    })
}).strict()

