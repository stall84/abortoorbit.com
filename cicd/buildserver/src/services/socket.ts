// import { Server, Socket } from "socket.io";
// /** DISABLED */

// class SocketInstance {
//     io: Server;

//     getInstance(httpServer?: any) {
//         if (!this.io) {
//             console.log('No socket found, creating new...')
//             this.io = new Server(httpServer, {
//                 cors: {
//                     origin: '*',
//                 },
//             });
//         }
//         this.io.on('connection', (socket: Socket) => {
//             console.log('user connected on socket: ', socket.id);
//             socket.on('disconnect', () => {
//                 console.log('user disconnected on socket: ', socket.id)
//             });
//         });
//         return this.io;
//     }
// }

// export default new SocketInstance();