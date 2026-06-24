const db = require('../config/db');

exports.obtenerMascotas = (req, res) => {

    db.query(
        'SELECT * FROM mascota',
        (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(results);
        }
    );
};

exports.crearMascota = (req, res) => {

    const {
        nombre,
        especie,
        edad,
        dueno,
        rut,
        telefono,
        motivo
    } = req.body;

    const sql = `
    INSERT INTO mascota
    (nombre, especie, edad, dueno, rut, telefono, motivo)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [nombre, especie, edad, dueno, rut, telefono, motivo],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                mensaje: 'Mascota registrada'
            });
        }
    );
};

exports.editarMascota = (req, res) => {

    const id = req.params.id;

    const {
        nombre,
        especie,
        edad,
        dueno,
        rut,
        telefono,
        motivo
    } = req.body;

    const sql = `
    UPDATE mascota
    SET
    nombre=?,
    especie=?,
    edad=?,
    dueno=?,
    rut=?,
    telefono=?,
    motivo=?
    WHERE idMascota=?
    `;

    db.query(
        sql,
        [
            nombre,
            especie,
            edad,
            dueno,
            rut,
            telefono,
            motivo,
            id
        ],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                mensaje: 'Mascota actualizada'
            });
        }
    );
};

exports.eliminarMascota = (req, res) => {

    const id = req.params.id;

    db.query(
        'DELETE FROM mascota WHERE idMascota=?',
        [id],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                mensaje: 'Mascota eliminada'
            });
        }
    );
};