var socket = io();
socket.on('connect', function() {
    console.log('connectado al servidor');
});

socket.on('disconnect', function() {
    console.log('desconexion del servidor');
});

//Enviar informacion
socket.emit('enviaMensaje', {
    usuario: 'Nelson',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('resp server ', resp);
});

// Escuchar al servidor
socket.on('enviaMensaje', function(mensaje) {
    console.log(mensaje);
});