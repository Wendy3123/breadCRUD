const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js') 

// INDEX
breads.get('/', (req, res) => {
  Bread.find()
      .then(foundBreads => {
          res.render('index', {
              breads: foundBreads,
              title: 'Index Page'
          })
      })
})


//ADD NEW BREAD
breads.get('/new', (req, res) => {
  res.render('new')
})


// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
          const bakedBy = foundBread.getBakedBy()
          console.log(bakedBy)
          res.render('show', {
              bread: foundBread
          })
      })
      .catch(err=>{
        res.render('error404')
      })
})


// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)    //adds new created bread to the list of breads
  .then(newBread=>{
    res.redirect('/breads')     //redirects back to the index /breads page
  })
  .catch(err=>{
    res.render('error404')
  })
})

// DELETE
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
  .then(res.status(303).redirect('/breads'))  //303 Status Code occurs when a page has been temporarily moved. As a result, the server can't connect to the requested resource. Instead, you'll be redirected to a new page
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body) //!!!!!!EXPLANANTION ON WHY WE NEED TO ADD REQ.BODY HERE IN ORDER TO WORK
    .then(updatedBread=>{
      res.redirect(`/breads/${req.params.id}`)
    })
    .catch(err=>{
      res.render('error404')
    })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
          res.render('edit', {
          bread: foundBread
          })
      })
      .catch(err=>{
        res.render('error404')
      })
})


module.exports = breads
//end of pt3 day4