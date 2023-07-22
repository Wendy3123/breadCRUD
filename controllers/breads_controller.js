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
  res.redirect('/breads')     //redirects back to the index /breads page
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)  // Inserts at index 1
  res.status(303).redirect('/breads')   //303 Status Code occurs when a page has been temporarily moved. As a result, the server can't connect to the requested resource. Instead, you'll be redirected to a new page
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})

// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})


module.exports = breads
//end of pt3 day4