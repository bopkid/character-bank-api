const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)


const port = process.env.PORT || 3001
const app = express()


app.use(express.json())

app.use(cors())

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


app.listen(port , () =>{
    console.log(`server is Running at port ${port}`)
})