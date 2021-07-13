require("dotenv/config")
const express = require("express");
const server = express();
const PORT = 9000;
const main = require('./src/main')
const database = require('./src/configs/db');
const morgan = require("morgan");
const redis = require("./src/configs/redis")
const path = require("path")
const fs = require("fs")

server.use(morgan("dev"))
let accessLogStream = fs.createWriteStream(path.join("./logs",'access.log'),{flags: 'a'})
server.use(morgan('combined', { stream: accessLogStream }))

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use("/public",express.static("public"))

server.use(main)

async function init() {
    try {
        await database.connect()
        const msg = await redis.check()
        server.listen(PORT, () => {
            console.log(`Conection to Database Success`)
            console.log(msg)
            console.log(`Service running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error.message)
        process.exit(1)
        
    }
}

init()