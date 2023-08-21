import express from "express";
import socketInstance from "../services/socket";

const router = express.Router();

// const socket = socketInstance.getInstance();

router.get('/', (req, res) => {

    res.json({ message: ' Routed blerp HERP? / ...' });
})

export default router;