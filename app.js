require("dotenv/config")
const express = require("express");
const server = express();
const PORT = 9000;
const main = require('./src/main')
const database = require('./src/configs/db');
const morgan = require("morgan");
const redis = require("./src/configs/redis")

server.use(morgan("dev"))
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