import solicitudes from "../models/solicitudes.js";
import { v4 as uuidv4 } from "uuid";

// Crear una solicitud
export const crear = (req, res) => {
    const nuevaSolicitud = {
        id: uuidv4(),
        dniCliente: req.body.dniCliente,
        nombreCompleto: req.body.nombreCompleto,
        montoSolicitado: req.body.montoSolicitado,
        plazoMeses: req.body.plazoMeses,
        tasaInteres: req.body.tasaInteres || 5.0,
        estado: "PENDIENTE",
        fechaCreacion: new Date().toISOString()
    };

    solicitudes.push(nuevaSolicitud);

    res.status(201).json(nuevaSolicitud);
};

// Obtener todas las solicitudes
export const obtenerTodas = (req, res) => {
    const { estado } = req.query;

    if (estado) {
        const resultado = solicitudes.filter(
            solicitud => solicitud.estado === estado
        );

        return res.json(resultado);
    }

    res.json(solicitudes);
};

// Obtener una solicitud por ID
export const obtenerPorId = (req, res) => {
    const solicitud = solicitudes.find(
        solicitud => solicitud.id === req.params.id
    );

    if (!solicitud) {
        return res.status(404).json({
            mensaje: "Solicitud no encontrada"
        });
    }

    res.json(solicitud);
};

// Actualizar una solicitud
export const actualizar = (req, res) => {
    const solicitud = solicitudes.find(
        solicitud => solicitud.id === req.params.id
    );

    if (!solicitud) {
        return res.status(404).json({
            mensaje: "Solicitud no encontrada"
        });
    }

    if (solicitud.estado !== "PENDIENTE") {
        return res.status(400).json({
            mensaje: "Solo se pueden actualizar solicitudes pendientes."
        });
    }

    solicitud.nombreCompleto = req.body.nombreCompleto;
    solicitud.montoSolicitado = req.body.montoSolicitado;
    solicitud.plazoMeses = req.body.plazoMeses;

    res.json(solicitud);
};

// Cambiar estado
export const cambiarEstado = (req, res) => {
    const solicitud = solicitudes.find(
        solicitud => solicitud.id === req.params.id
    );

    if (!solicitud) {
        return res.status(404).json({
            mensaje: "Solicitud no encontrada"
        });
    }

    solicitud.estado = req.body.estado;

    res.json(solicitud);
};

// Eliminar una solicitud
export const eliminar = (req, res) => {
    const index = solicitudes.findIndex(
        solicitud => solicitud.id === req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            mensaje: "Solicitud no encontrada"
        });
    }

    solicitudes.splice(index, 1);

    res.json({
        mensaje: "Solicitud eliminada correctamente."
    });
};