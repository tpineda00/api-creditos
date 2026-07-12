import { z } from "zod";

// Esquema base para una solicitud
const solicitudBaseSchema = z.object({
    dniCliente: z
        .string()
        .min(13, {
            message: "El DNI debe tener al menos 13 caracteres.",
        })
        .max(15, {
            message: "El DNI no puede exceder los 15 caracteres.",
        }),

    nombreCompleto: z
        .string()
        .min(5, {
            message: "El nombre completo debe contener al menos 5 caracteres.",
        })
        .max(100, {
            message: "El nombre completo no puede exceder los 100 caracteres.",
        }),

    montoSolicitado: z
        .number({
            required_error: "El monto solicitado es obligatorio.",
        })
        .min(1000, {
            message: "El monto solicitado debe ser mayor o igual a 1000.",
        })
        .max(100000, {
            message: "El monto solicitado no puede exceder los 100000.",
        }),

    plazoMeses: z
        .number({
            required_error: "El plazo en meses es obligatorio.",
        })
        .int({
            message: "El plazo debe ser un número entero.",
        })
        .min(1, {
            message: "El plazo mínimo es de 1 mes.",
        })
        .max(60, {
            message: "El plazo máximo es de 60 meses.",
        }),

    tasaInteres: z
        .number()
        .min(0, {
            message: "La tasa de interés no puede ser negativa.",
        })
        .optional()
        .default(5),
}).strict();


// ================================
// POST /solicitudes
// ================================
export const crearSolicitudSchema = solicitudBaseSchema;


// ================================
// PUT /solicitudes/:id
// ================================
export const actualizarSolicitudSchema = solicitudBaseSchema;


// ================================
// PATCH /solicitudes/:id/estado
// ================================
export const estadoSchema = z
    .object({
        estado: z.enum(["APROBADA", "RECHAZADA"], {
            message:
                "El estado debe ser 'APROBADA' o 'RECHAZADA'.",
        }),
    })
    .strict();