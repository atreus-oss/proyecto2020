$('#usuario_usuario').focus();

function ingresar() {
    console.log('ingresar()');
    const usuario_usuario = $('#usuario_usuario').val();
    const clave_usuario = $('#clave_usuario').val();
    console.log(`${usuario_usuario} - ${clave_usuario}`);
    var url = 'api/usuarios/login';
    var data = { usuario_usuario: usuario_usuario, clave_usuario: clave_usuario };
    var parametros = {
        method: 'POST',
        body: JSON.stringify(data)
    };
    fetch(url, parametros)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) { // recupera los datos del servidor
            console.log(myJson);
            if (myJson.length > 0) {
                location.href = "./menu";
            } else {
                alert('Cedencial incorrecta');
                //mensaje('Credencial incorrecta', 'Aceptar', 'focus("#usuario_usuario")')
            }
        });

}

function salir() {
    location.href = './';
}