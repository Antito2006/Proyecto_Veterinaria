function login() {

    const usuario =
        document.getElementById(
            'usuario'
        ).value;

    const contrasena =
        document.getElementById(
            'contrasena'
        ).value;

    fetch(
        '/api/usuarios/login',
        {
            method: 'POST',

            headers: {
                'Content-Type':
                    'application/json'
            },

            body: JSON.stringify({
                usuario,
                contrasena
            })
        }
    )
        .then(r => r.json())
        .then(data => {

            if (data.success) {

                location.href =
                    'admin.html';

            } else {

                alert(
                    'Usuario incorrecto'
                );
            }
        });
}