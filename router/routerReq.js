const express = require('express')
const router = express.Router()

const format = require('../model/schema')

// get: all --> Select All using find()
// url path: ../users/all

router.get('/all', async (req, res)=>{
    try{
        const data = await format.find()
        res.json(data)
    }catch(err){
        console.log("Error: "+ err)
    }
})

// get: one --> Select One using findOne()
// url path: ../users/numberPlate

router.get('/:numberPlate', async (req, res)=>{
    try{
        const data = await format.findOne({numberPlate: req.params.numberPlate})
        if(data == null){
            res.send("No such Data exists!")
            console.log("No such Data exists!")
        }
        else{
            res.json(data)
        }
    }catch(err){
        console.log("Error: "+ err)
    }
})

// post: Insert one create(), validate(), save()
// url path: 

router.post('/', async (req, res)=>{

    try{
        const {numberPlate, ownerName, vehicleModel, finePending} = req.body

        if(numberPlate && ownerName && vehicleModel &&  finePending){
            const doc = await format.create({
                numberPlate, ownerName, vehicleModel, finePending
            })

            await doc.validate()
            const doc1 = await doc.save()
            
            res.json(doc1)
        }
        else{
            console.log("Insufficient data for insertion!")
            res.send("Insufficient data for insertion!")
        }
    }
    catch(err){
        console.log("Error: "+err)
    }

})

// patch: Update using findOneAndUpdate()
// url path:

// delete: Delete data usind remove()
// url path:

module.exports = router
