const mongoose = require('mongoose')

mongoose.connect(process.env.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const con = mongoose.connection

con.on('open', ()=>{
    console.log("DB Connected!")
})
