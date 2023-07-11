const express = require('express')
require('dotenv').config()
require('./database/DBConnect')

const app = express()

app.use(express.json())

app.use('/vehicles', require('./router/routerReq'))

app.listen(process.env.PORT, ()=>{
    console.log(`Server started!`)
})