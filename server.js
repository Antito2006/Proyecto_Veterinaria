const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(
    express.static(
        path.join(__dirname,'public')
    )
);

const usuarioRoutes =
require('./routes/usuarioRoutes');

const mascotaRoutes =
require('./routes/mascotaRoutes');

app.use(
    '/api/usuarios',
    usuarioRoutes
);

app.use(
    '/api/mascotas',
    mascotaRoutes
);

app.listen(3000, ()=>{

    console.log(
        'Servidor en http://localhost:3000'
    );
});