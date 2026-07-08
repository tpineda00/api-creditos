const express = require("express");
const router = express.Router();

const solicitudesController = require("../controllers/solicitudes.controller");

// Middlewares y esquemas (los desarrollará la Persona 2)
const validate = require("../middlewares/validate");
const {
    crearSolicitudSchema,
    actualizarSolicitudSchema,
    estadoSchema
} = require("../schemas/solicitud.schema");

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

module.exports = router;