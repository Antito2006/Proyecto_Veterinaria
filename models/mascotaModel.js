class Mascota {

    constructor(
        idMascota,
        nombre,
        raza,
        edad,
        dueno,
        telefono,
        motivo
    ){

        this.idMascota = idMascota;
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.dueno = dueno;
        this.telefono = telefono;
        this.motivo = motivo;
    }
}

module.exports = Mascota;