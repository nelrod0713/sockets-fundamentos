const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectdo');

    //Enviar informacion
    client.emit('enviaMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviaMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviaMensaje', data);

        /* if (mensaje.usuario) {
            callback({
                resp: 'todo salio ok'
            })
        } else {
            console.log({
                resp: 'Todo salio mallllllllllllllllll'
            });

        } */

    });
});