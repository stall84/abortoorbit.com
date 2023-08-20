import express from "express";
import socketInstance from "../services/socket";

const router = express.Router();

// const socket = socketInstance.getInstance();

router.get('/', (req, res) => {
    // console.log('socketInstance?: ', socket)
    // socket.emit('message', 'Socket Emitted...')
    res.json({ message: ' Routed / ...' });
})

export default router;