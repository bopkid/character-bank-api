const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)


const port = process.env.PORT || 3001
const app = express()


app.use(express.json())

const corsOptions ={
    origin:[`http://localhost:3000`],
    origin: [`http://localhost:3000`],
    credentials: true, // allows our session cookie to be sent back and forth from server to client
    optionsSuccessStatus: 200 // some older browsers choke on the default 204 code  
}
app.use(cors(corsOptions))

app.use(session({
    store: new MongoStore({url:'mongodb://localhost:27017/characterbank'}),
    secret: "BigScrectsDontTake",
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 *24
    }
}))




app.use('/api/characters' , routes.characters)
app.use('/api/users' , routes.users)
app.use('/api/auth' , routes.auth)

app.get('/', (req,res) => {
    res.send('hello there!')
})


app.listen(process.env.PORT || 3001 , () =>{
    console.log(`server is Running at port ${port}`)
})