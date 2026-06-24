# Veterinaria Patitas Felices

## Integrantes

* Antonella Bravo
* Sebastián Muñoz
* Felipe Caroca

## Descripción

Patitas Felices es una aplicación web para la gestión de mascotas en una veterinaria. Permite registrar, editar, eliminar y buscar mascotas por Rut del dueño mediante un panel de administración protegido con login. Además incorpora estadísticas, selección de motivos mediante lista desplegable y exportación de registros a Excel.

Área asignada: Salud.


## Requisitos Previos

* Node.js
* XAMPP
* MySQL
* phpMyAdmin

## Instalación

1. Descargar o clonar el proyecto.
2. Importar el archivo `veterinaria.sql` en phpMyAdmin.
3. Abrir una terminal en la carpeta del proyecto.
4. Ejecutar:

```bash
npm install
node server.js
```

5. Abrir en el navegador:

```text
http://localhost:3000
```

## Configuración Base de Datos

Archivo:

```text
config/db.js
```

Configuración utilizada:

```javascript
host: 'localhost'
user: 'root'
password: ''
database: 'veterinaria'
```

El archivo SQL para importar se encuentra en:

```text
veterinaria.sql
```

## Credenciales de Prueba

Usuario:

```text
admin
```

Contraseña:

```text
1234
```

## Uso del Sistema

* Acceder a la página principal.
* Ingresar al panel de administración mediante el botón Administración.
* Iniciar sesión con las credenciales de prueba.
* Registrar mascotas.
* Editar mascotas.
* Eliminar mascotas.
* Buscar mascotas por Rut del dueño.
* Seleccionar el motivo de atención desde una lista desplegable.
* Exportar registros a Excel.
* Visualizar estadísticas de vacunaciones, controles y urgencias.


## Estructura del Proyecto

```text
Proyecto_Veterinaria
│
├── config
│   └── db.js
│       Conexión a MySQL
│
├── controllers
│   ├── mascotaController.js
│   │   CRUD de mascotas
│   │
│   └── usuarioController.js
│       Validación de login
│
├── models
│   ├── mascotaModel.js
│   │   Clase Mascota
│   │
│   └── usuarioModel.js
│       Clase Usuario
│
├── public
│   ├── index.html
│   │   Página principal
│   │
│   ├── login.html
│   │   Formulario de acceso
│   │
│   ├── admin.html
│   │   Panel de administración
│   │
│   └── js
│       ├── login.js
│       │   Lógica del login
│       │
│       └── mascota.js
│           CRUD, estadísticas,
│           búsqueda por Rut
│           y exportación a Excel
│
├── routes
│   ├── mascotaRoutes.js
│   │   Rutas de mascotas
│   │
│   └── usuarioRoutes.js
│       Rutas de usuarios
│
├── veterinariaV2.sql
│   Base de datos del proyecto
│
├── package.json
│   Dependencias del proyecto
│
├── server.js
│   Servidor principal Express
│
└── README.md
    Documentación del proyecto
```
