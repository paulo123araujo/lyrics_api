const express = require('express')
const cors = require('cors')
const server = express()
const routes = require('./routes')

const port = 3333

server.use(express.json())
server.use(cors())
server.use(routes)

server.listen(port, () => console.log(`Server is listening on port ${port}`))