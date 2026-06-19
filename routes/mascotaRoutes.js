const express = require('express');

const router = express.Router();

const mascotaController =
require('../controllers/mascotaController');

router.get(
    '/',
    mascotaController.obtenerMascotas
);

router.post(
    '/',
    mascotaController.crearMascota
);

router.put(
    '/:id',
    mascotaController.editarMascota
);

router.delete(
    '/:id',
    mascotaController.eliminarMascota
);

module.exports = router;