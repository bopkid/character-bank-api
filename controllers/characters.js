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
    db.Character.findById(req.params.id, (err,foundCharacter) =>{
        if(err)console.log(`Error in Character#show`,err)

        if(!foundCharacter) return res.json({
            message:"Character with provided Id Not Found"
        })
        res.status(200).json({character: foundCharacter})
    }) 
}

const create = (req,res) =>{
    db.Character.create(req.body, (err,savedCharacter ) =>{
        if(err) console.log(`Error in game#create`. err)

        res.status(200).json({character:savedCharacter})
    })
}

const update  = (req,res) =>{
    const options = {new:true}
    db.Character.findByIdAndUpdate(req.params.id , req.body, options, (err,updatedCharacter) =>{
        if(err) console.log(`Error in character#update`. err)

        if(!updatedCharacter) return res.json({
            message: "No game with that ID found"
        })

        res.status(200).json({character: updatedCharacter})
    })
}
const destroy = (req,res) =>{
    db.Character.findByIdAndDelete(req.params.id , (err, deletedCharacter) =>{
        if(err) console.log(`Error in character#destory` ,err)
        if(!deletedCharacter) return res.json({
            message: "No Character with that ID found"
        })
        res.status(200).json({character:deletedCharacter})
    }) 
}

module.exports= {
    index,
    show,
    create,
    update,
    destroy
}