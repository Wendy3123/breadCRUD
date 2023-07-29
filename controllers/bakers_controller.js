// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

baker.get('/',(req,res)=>{
    Baker.find()
    .then(foundBaker=>{
        res.send(foundBaker)
    })
})

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})


// export
module.exports = baker                    
