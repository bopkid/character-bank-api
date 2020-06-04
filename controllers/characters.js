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

const show = (req,res) =>{
    db.Character.create(req.body , (err,foundCharacter)=>{
        if(err) console.log('error in characers#show' ,err)

        if(!foundCharacter) return res.json({
            message: 'Character with provided ID not found'
        })
        res.status(200).json({character:foundCharacter})
    })
}

const create = (req,res) =>{
    db.Character.create(req.body, (err,savedCharacter ) =>{
        if(err) console.log(`Error in game#create`. err)

        res.status(200).json({character:savedCharacter})
    })
}

module.exports= {
    index,
    show,
    create,
}