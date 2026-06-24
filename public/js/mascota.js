let editando = false;

function mostrarMensaje(texto, tipo) {

    document.getElementById('mensaje').innerHTML = `
<div class="alert alert-${tipo}">
${texto}
</div>
`;

    setTimeout(() => {

        document.getElementById('mensaje').innerHTML = '';

    }, 3000);

}

function cargarMascotas() {

    fetch('/api/mascotas')
        .then(r => r.json())
        .then(data => {

            let vacunas = 0;
            let controles = 0;
            let urgencias = 0;

            let html = `
<table class="table table-striped table-hover">

<thead class="table-primary">

<tr>

<th>ID</th>
<th>Nombre</th>
<th>Especie</th>
<th>Edad</th>
<th>Dueño</th>
<th>Rut</th>
<th>Teléfono</th>
<th>Motivo</th>
<th>Acciones</th>

</tr>

</thead>

<tbody>
`;

            data.forEach(m => {

                const motivo = m.motivo.toLowerCase();

                if (motivo === 'vacunacion') {
                    vacunas++;
                }

                if (motivo === 'control general') {
                    controles++;
                }

                if (motivo === 'urgencia') {
                    urgencias++;
                }

                html += `
<tr>

<td>${m.idMascota}</td>
<td>${m.nombre}</td>
<td>${m.especie}</td>
<td>${m.edad}</td>
<td>${m.dueno}</td>
<td>${m.rut}</td>
<td>${m.telefono}</td>
<td>${m.motivo}</td>

<td>

<button
class="btn btn-warning btn-sm"
onclick='editarMascota(${JSON.stringify(m)})'>
Editar
</button>

<button
class="btn btn-danger btn-sm"
onclick='eliminarMascota(${m.idMascota})'>
Eliminar
</button>

</td>

</tr>
`;
            });

            html += `
</tbody>
</table>
`;

            document.getElementById('resultado').innerHTML = html;

            document.getElementById('totalMascotas').innerText =
                data.length;

            document.getElementById('totalVacunas').innerText =
                vacunas;

            document.getElementById('totalControles').innerText =
                controles;

            document.getElementById('totalUrgencias').innerText =
                urgencias;

        });
}

function guardarMascota() {

    const nombre =
        document.getElementById('nombre').value.trim();

    const especie =
        document.getElementById('especie').value.trim();

    const edad =
        document.getElementById('edad').value.trim();

    const dueno =
        document.getElementById('dueno').value.trim();

    const rut =
        document.getElementById('rut').value.trim();

    const telefono =
        document.getElementById('telefono').value.trim();

    const motivo =
        document.getElementById('motivo').value.trim();

    if (
        !nombre ||
        !especie ||
        !edad ||
        !dueno ||
        !rut ||
        !telefono ||
        !motivo
    ) {

        mostrarMensaje(
            'Debe completar todos los campos',
            'danger'
        );

        return;

    }

    const mascota = {

        nombre,
        especie,
        edad,
        dueno,
        rut,
        telefono,
        motivo

    };

    const id =
        document.getElementById('idMascota').value;

    if (editando) {

        fetch(`/api/mascotas/${id}`, {

            method: 'PUT',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(mascota)

        })
            .then(() => {

                mostrarMensaje(
                    'Mascota actualizada correctamente',
                    'success'
                );

                limpiarFormulario();

                cargarMascotas();

            });

    } else {

        fetch('/api/mascotas', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(mascota)

        })
            .then(() => {

                mostrarMensaje(
                    'Mascota registrada correctamente',
                    'success'
                );

                limpiarFormulario();

                cargarMascotas();

            });

    }
}

function editarMascota(m) {

    editando = true;

    document.getElementById('idMascota').value =
        m.idMascota;

    document.getElementById('nombre').value =
        m.nombre;

    document.getElementById('especie').value =
        m.especie;

    document.getElementById('edad').value =
        m.edad;

    document.getElementById('dueno').value =
        m.dueno;

    document.getElementById('rut').value =
        m.rut;

    document.getElementById('telefono').value =
        m.telefono;

    document.getElementById('motivo').value =
        m.motivo;

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}

function eliminarMascota(id) {

    if (confirm('¿Eliminar mascota?')) {

        fetch(`/api/mascotas/${id}`, {

            method: 'DELETE'

        })
            .then(() => {

                mostrarMensaje(
                    'Mascota eliminada correctamente',
                    'warning'
                );

                cargarMascotas();

            });

    }
}

function limpiarFormulario() {

    editando = false;

    document.getElementById('idMascota').value = '';

    document.getElementById('nombre').value = '';

    document.getElementById('especie').value = '';

    document.getElementById('edad').value = '';

    document.getElementById('dueno').value = '';

    document.getElementById('rut').value = '';

    document.getElementById('telefono').value = '';

    document.getElementById('motivo').value = '';

}

function buscarPorRut() {

    const rut =
        document.getElementById('buscarRut')
            .value
            .toLowerCase();

    const filas =
        document.querySelectorAll('tbody tr');

    filas.forEach(fila => {

        if (
            fila.innerText
                .toLowerCase()
                .includes(rut)
        ) {

            fila.style.display = '';

        } else {

            fila.style.display = 'none';

        }

    });

}

function exportarExcel() {

    const tabla = document.querySelector('table');

    if (!tabla) {

        mostrarMensaje(
            'No hay datos para exportar',
            'danger'
        );

        return;

    }

    const copiaTabla = tabla.cloneNode(true);

    copiaTabla.querySelectorAll('tr').forEach(fila => {

        if (fila.cells.length > 0) {

            fila.deleteCell(fila.cells.length - 1);

        }

    });

    const libro =
        XLSX.utils.table_to_book(copiaTabla);

    XLSX.writeFile(
        libro,
        'mascotas.xlsx'
    );

    mostrarMensaje(
        'Excel generado correctamente',
        'success'
    );

}