const express= require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const session=require('express-session')
const handleBars=require('express-handlebars')
const path=require('path')
const mongoose=require('mongoose')

//APP CONFIGURATIONS

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
//For all Static files (Css, Imgs, Js, Fonts etc)
let {HOST, PORT}=require('./config/configuration')
let app_route=require('./routes/app-routes')
let api_route=require('./routes/api-routes')
 
//VIEW CONFIGURATION
app.engine('hbs', handleBars.engine({
    layoutsDirectory: path.join(__dirname, 'views/layouts'),
    defaultLayout: 'main', extname: '.hbs'
}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
 

//MONGODB CONNECTION
mongoose.connect('mongodb://localhost:27017/wallet_africa',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on("error", console.error.bind(console,"Connection Error"))
mongoose.connection.on("connected", function () {
    console.log("Mongodb Connected");
})

//  MONGOOSE CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/wallet_africa',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on("error", console.error.bind(console, "Connection Error"))
mongoose.connection.on("connected", function () {
    console.log("Mongodb Connected");
})

 //SET ROUTES
 app.use('/', app_route)
 app.use('/api', api_route)
 


//SET ROUTES
app.use('/', app_route)


<<<<<<< Updated upstream

app.listen(PORT, () => {
=======
app.listen(PORT, ()=>{
>>>>>>> Stashed changes
    console.log(`Running on ${HOST}${PORT}`);
})