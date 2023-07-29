//DEPENDENCIES
const express= require('express')
const methodOverride= require('method-override')
const mongoose =require('mongoose')

//CONFIGURATION
require('dotenv').config()
const PORT= process.env.PORT
const app = express()

//MONGOOSE CONNECT
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=>console.log('connected to ',process.env.MONGO_URI))
.catch(err=>console.log('error: ', err))

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method')) 


//ROUTES
app.get('/',(req,res)=>{
    res.send('Welcome to Wendys Awesome App about Breads')
})

//BREADS
const breadsController= require('./controllers/breads_controller.js')
app.use('/breads',breadsController)

//BAKERS
const bakersController= require('./controllers/bakers_controller.js')
app.use('/bakers',bakersController)

//404 PAGE
app.get('*',(req,res)=>{
    res.render('error404')
})

//LISTEN
app.listen(PORT,()=>{
    console.log('I am listening on port', PORT)
})

