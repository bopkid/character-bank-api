const db = require('../models')


const index = (req,res) =>{
    db.Character.find({}, (err,foundCharacters) =>{
        if (err) console.log('Error in character#index' , err)

        if(!foundCharacters) return res.json({
            message:'No Characrter found in database'
        })
        res.status(200).json({characters: foundCharacters})
    })
}

module.exports= {
    index,
}