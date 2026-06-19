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
        raza,
        edad,
        dueno,
        telefono,
        motivo
    } = req.body;

    const sql = `
    INSERT INTO mascota
    (nombre, raza, edad, dueno, telefono, motivo)
    VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [nombre, raza, edad, dueno, telefono, motivo],
        (err, result) => {

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
        raza,
        edad,
        dueno,
        telefono,
        motivo
    } = req.body;

    const sql = `
    UPDATE mascota
    SET
    nombre=?,
    raza=?,
    edad=?,
    dueno=?,
    telefono=?,
    motivo=?
    WHERE idMascota=?
    `;

    db.query(
        sql,
        [
            nombre,
            raza,
            edad,
            dueno,
            telefono,
            motivo,
            id
        ],
        (err, result) => {

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
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                mensaje: 'Mascota eliminada'
            });
        }
    );
};