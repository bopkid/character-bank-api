const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    Name: {
        type:String,
        required:true
    },
    System: String,
    Bio: String,
    Feats: Array,
    Inventory: Array,
    Magic: Array,
    Skill: Array
})

const Chracter = mongoose.model('Character', CharacterSchema);

module.exports  = Chracter;