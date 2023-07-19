//DEPENDENCIES
const express= require('express')

//CONFIGURATION
require('dotenv').config()
const PORT= process.env.PORT
const app = express()

//ROUTES
app.get('/',(req,res)=>{
    res.send('Welcome to Wendys Awesome App about Breads')
})

app.get('*',(req,res)=>{
    res.send('404')
})

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


//BREADS
const breadsController= require('./controllers/breads_controller.js')
app.use('/breads',breadsController)

//LISTEN
app.listen(PORT,()=>{
    console.log('I am listening on port', PORT)
})

