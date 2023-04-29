const express= require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const session=require('express-session')
const handleBars=require('express-handlebars')
const path=require('path')

//APP CONFIGURATIONS

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
//For all Static files (Css, Imgs, Js, Fonts etc)
let {HOST, PORT}=require('./config/configuration')
 let app_route=require('./routes/app-routes')
 
//VIEW CONFIGURATION
app.engine('hbs',handleBars.engine({layoutsDirectory:path.join(__dirname, 'views/layouts'),
 defaultLayout:'main', extname:'.hbs' }))

 app.set('views', path.join(__dirname, 'views'))
 app.set('view engine', 'hbs')

 //SET ROUTES
 app.use('/', app_route)



app.listen(PORT, ()=>{
    console.log(`Running on ${HOST}${PORT}`);
})