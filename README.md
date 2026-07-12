Segunda Tarea de Diseno Digital Trabajo en Grupo    
-Jose Ferrera
-Tristian Pineda


API Rest desarrollada con Node.js,Express y Zod para la solicitudes de credito 

### index.js
Punto de entrada de la aplicación. Configura Express, registra los middlewares, las rutas y levanta el servidor en el puerto **3000**.

### routes/solicitudes.routes.js
Define los endpoints de la API y envía las solicitudes al controlador correspondiente.

### controllers/solicitudes.controller.js
Contiene la lógica del CRUD:
- Crear solicitud
- Obtener solicitudes
- Buscar por ID
- Actualizar
- Cambiar estado
- Eliminar

### models/solicitudes.js
Simula una base de datos utilizando un arreglo en memoria donde se almacenan las solicitudes.

### schemas/solicitud.schemas.js
Define las validaciones de los datos utilizando **Zod** antes de procesar cada solicitud.

### middleware/validate.js
Valida la información recibida en las peticiones. Si los datos son incorrectos, devuelve un **400 Bad Request**.

### middleware/global.middleware.js
Contiene:
- **requestLogger:** registra las peticiones que llegan al servidor.
- **errorHandler:** captura errores y responde con **500 Internal Server Error**.

