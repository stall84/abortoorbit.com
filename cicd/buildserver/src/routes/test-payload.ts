import express from "express";

const router = express.Router();

router.post('/', (req, res) => {
    console.log('Incoming Req: ', req);
    res.json({ message: 'Received POST on /test-payload ' });
})

export default router;