const express = require('express')
require('dotenv').config()
require('./database/DBConnect')

const app = express()

app.use(express.json())

app.listen(process.env.PORT, ()=>{
    console.log(`Server started!`)
})