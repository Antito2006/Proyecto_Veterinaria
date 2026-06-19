#  Veterinaria Patitas Felices

## Integrantes

* Antonella Bravo
* Sebastian Muñoz
* Felipe Caroca 

## Descripción

Patitas Felices es una aplicación web para una veterinaria. Permite mostrar información del negocio y administrar mascotas mediante un panel protegido con login.

Área asignada: Salud.

## Requisitos

* Node.js
* XAMPP
* MySQL
* phpMyAdmin

## Instalación

1. Descargar el proyecto.
2. Importar el archivo `database.sql` en phpMyAdmin.
3. Ejecutar:

```bash
npm install
node server.js
```

4. Abrir:

```text
http://localhost:3000
```

## Configuración Base de Datos

Archivo:

```text
config/db.js
```

Configuración:

```javascript
host: 'localhost'
user: 'root'
password: ''
database: 'veterinaria'
```

## Credenciales

Usuario:

```text
admin
```

Contraseña:

```text
1234
```

## Funciones

* Login
* Registrar mascotas
* Listar mascotas
* Editar mascotas
* Eliminar mascotas
* Ver estadísticas

## Estructura

```text
Proyecto_Veterinaria
│
├── config
├── controllers
├── models
├── public
├── routes
├── veterinaria.sql
├── package.json
├── server.js
└── README.md
```
