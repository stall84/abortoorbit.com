import express from "express";
import "dotenv/config";
import routes from "./routes/index";
import http from "http";


const app = express();
const server = http.createServer(app);


// app.get("/", (req, res) => {
//     // DEBUG - REMOVE
//     // console.log('req obj: ', req)
//     res.send(" / route hit - Sup? ");

// });

app.use('/', routes);

server.listen(process.env.PORT, () => {
    console.log(`server started at: ${process.env.HOST}:${process.env.PORT}`)
})