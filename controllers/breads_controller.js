const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.render('index',
    {
      breads: Bread,
      title: 'Index Page'
    }
  )
})

//ADD NEW BREAD
breads.get('/new', (req, res) => {
  res.render('new')
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('show', {
      bread:Bread[req.params.arrayIndex],
      index:req.params.arrayIndex,
    })
  } else { 
    res.render('error404')
  }
})

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.push(req.body)
  res.redirect('/breads')
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)  // Inserts at index 1
  res.status(303).redirect('/breads')   //303 Status Code occurs when a page has been temporarily moved. As a result, the server can't connect to the requested resource. Instead, you'll be redirected to a new page
})






module.exports = breads
//end of pt3 day4