const {app, server} = require('../../app');
const connect = () => {
    const {Server} = require('socket.io');
    const io = new Server(server, {
        cors : {
            origin : '*'
        }
    });
    
    io.on('connection', (socket) => {
        socket.on('someone login', id => {
            socket.broadcast.emit('someone login', id)
        }) 
        socket.on('dataUpdate', data => {
            socket.broadcast.emit('dataUpdate', data);
        }) 
    })


    app.get('/socket.io/', (req, res) => res.send(''));
}
module.exports = {connect};