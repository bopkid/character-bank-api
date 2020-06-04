const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI ||  "mongodb://localhost:27017/characterbank"


const configOptions  ={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(connectionString,configOptions)
    .then(()=> console.log('MongoDb Sucessfully connected...'))
    .catch((err) => console.log(`mongoDB connection error: ${err}`))


    module.exports = {
        Character: require('./character'),
        User: require('./user')
    }