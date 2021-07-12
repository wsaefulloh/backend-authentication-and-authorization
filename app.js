require("dotenv/config")
const express = require("express");
const server = express();
const PORT = 9000;
const main = require('./src/main')
const database = require('./src/configs/db');
const morgan = require("morgan");

server.use(morgan("dev"))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(main)
database.connect()
.then(()=>{
    server.listen(PORT,() => {
        console.log('Connection to Database Successful')
        console.log(`Sercive running on port ${PORT}`)
    })
}).catch(()=>{
    console.log('Connection to Database Failed')
})