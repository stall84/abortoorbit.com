import express from "express";
import buildHook from "../controllers/build-hook"
import testGet from "../controllers/test-get"

const router = express.Router();

// const socket = socketInstance.getInstance();

router
    .route('/test-get')
    .get(testGet)

router
    .route('/build-hook')
    .post(buildHook)

export default router;