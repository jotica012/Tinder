const express = require ("express");
const server = express ();

server.use(express.static(__dirname + "/public"));
server.listen(8082, () => 
    console.log("Server Running in 8082"));


