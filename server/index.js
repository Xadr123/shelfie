require('dotenv').config()

const express = require('express')

const massive = require('massive')

const cors = require('cors')

const app = express()

const controller = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env


app.use(express.json())

app.use(cors())

app.get('/api/inventory', controller.getGamesList)

app.post('/api/product', controller.newProduct)

app.delete('/api/product/:id', controller.deleteProduct)

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Up and Running')
    app.listen(SERVER_PORT, () => console.log(`Server running on: PORT ${SERVER_PORT}`))
}).catch(err => console.log(err))