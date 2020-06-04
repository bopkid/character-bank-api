const express = require('express')
const routes = require('./routes')


const port = process.env.PORT || 3001
const app = express()


app.use(express.json())




app.use('/api/characters' , routes.characters)


app.listen(port , () =>{
    console.log(`server is Running at port ${port}`)
})