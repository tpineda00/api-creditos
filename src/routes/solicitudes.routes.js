import express from "express";
import * as solicitudesController from "../controllers/solicitudes.controller.js";

// Middlewares y esquemas
import validate from "../middlewares/validate.js";
import {
    crearSolicitudSchema,
    actualizarSolicitudSchema,
    estadoSchema
} from "../schemas/solicitud.schema.js";

const router = express.Router();

// Crear una solicitud
router.post(
    "/",
    validate(crearSolicitudSchema),
    solicitudesController.crear
);

// Obtener todas las solicitudes
router.get(
    "/",
    solicitudesController.obtenerTodas
);

// Obtener una solicitud por ID
router.get(
    "/:id",
    solicitudesController.obtenerPorId
);

// Actualizar una solicitud
router.put(
    "/:id",
    validate(actualizarSolicitudSchema),
    solicitudesController.actualizar
);

// Cambiar el estado de una solicitud
router.patch(
    "/:id/estado",
    validate(estadoSchema),
    solicitudesController.cambiarEstado
);

// Eliminar una solicitud
router.delete(
    "/:id",
    solicitudesController.eliminar
);

export default router;