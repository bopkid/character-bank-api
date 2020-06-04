const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true, 'Name is requried']
    },
    email:{
        type:String,
        require:[true, 'Email is requried']
    },
    password:{
        type:String,
        require:[true, 'Password is requried']
    }
})

const User = mongoose.model('User',UserSchema);

module.exports = User