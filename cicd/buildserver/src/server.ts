import express from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

//
import routes from "./routes/index";
import socketInstance from "./services/socket";

// Setup server
const app = express();
const server = http.createServer(app);

// Init socket instance (singleton);
socketInstance.getInstance(server);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);


server.listen(process.env.PORT, () => {
    console.log(`server started at: ${process.env.HOST}:${process.env.PORT}`)
})