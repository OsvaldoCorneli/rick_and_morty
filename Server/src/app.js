const express = require('express');
const mainRouter = require("../src/routes/mainRouter")
const morgan = require("morgan")
const server = express();

server.use((req, res, next) => {res.header('Access-Control-Allow-Origin', '*');

res.header('Access-Control-Allow-Credentials', 'true');
res.header('Access-Control-Allow-Headers',     
'Origin, X-Requested-With, Content-Type, Accept');
res.header(      'Access-Control-Allow-Methods',     
'GET, POST, OPTIONS, PUT, DELETE');next();});

server.use(morgan("dev"))
server.use(express.json())    
server.use("/rickandmorty", mainRouter)

module.exports = server;