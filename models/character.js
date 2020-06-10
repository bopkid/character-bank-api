const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    Name: {
        type:String,
        required:true
    },
    img: {
        type: String
    } ,
    System: String,
    Bio: String,
    Feats: Array,
    Inventory: Array,
    Magic: Array,
    Skill: Array,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
})

const Chracter = mongoose.model('Character', CharacterSchema);

module.exports  = Chracter;