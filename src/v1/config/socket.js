const {app, server} = require('../../app');
const connect = () => {
    const {Server} = require('socket.io');
    const io = new Server(server, {
        cors : {
            origin : '*'
        }
    });
    
    io.on('connection', (socket) => {
        socket.on('someone chat', () => {
            io.emit('someone chat');
        });
        socket.on('someone login', id => {
            socket.broadcast.emit('someone login', id)
        })
        socket.on('change home', id => {
            io.emit('change home', id);
        })
        socket.on('change post', id => {
            io.emit('change post', id);
        })
        socket.on('delete post', postId => {
            io.emit('delete post', postId);
        })
        socket.on('add post', post => {
            io.emit('add post', post);
        })
    })


    app.get('/socket.io/', (req, res) => res.send(''));
}
module.exports = {connect};