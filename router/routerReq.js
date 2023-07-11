const express = require('express')
const router = express.Router()

const format = require('../model/schema')

// get: all --> Select All using find()
// url syntax: ../users/all

router.get('/all', async (req, res)=>{
    try{
        const data = await format.find()
        res.json(data)
    }catch(err){
        console.log("Error: "+ err)
    }
})

// get: one --> Select One using findOne()
// url syntax: ../users/numberPlate

router.get('/:numberPlate', async (req, res)=>{
    try{
        const data = await format.findOne({numberPlate: req.params.numberPlate})
        if(data == null){
            console.log("No such Vehicle Data exists!")
            res.send("No such Vehicle Data exists!")
        }
        else{
            res.json(data)
        }
    }catch(err){
        console.log("Error: "+ err)
    }
})

// post: Insert one create(), validate(), save()
// url syntax: ../users

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
// url syntax: ../users/numberPlate

router.patch('/:numberPlate', async (req, res)=>{
    try{
        const statusData = await format.findOneAndUpdate({numberPlate: req.params.numberPlate}, req.body, {new: true})
        if(!statusData){
            console.log("No such Vehicle Data exists!")
            res.send("No such Vehicle Data exists!")
        }
        else{
            res.json(statusData)
        }
    }
    catch(err){
        console.log("Error: " + err)
    }
})

// delete: Delete data usind deleteOne()
// url syntax: ../users/numberPlate

router.delete('/:numberPlate', async (req, res) => {
    try{
        const data = await format.findOne({numberPlate: req.params.numberPlate})
        if(data != null){
            await format.deleteMany({numberPlate: req.params.numberPlate})
            console.log("Data deleted Successfully!")
            res.send("Data deleted Successfully!")
        }
        else{
            console.log("No such Vehicle Data exists!")
            res.send("No such Vehicle Data exists!")
        }
    }
    catch(err){
        console.log("Error: " + err);
    } 
})

module.exports = router
