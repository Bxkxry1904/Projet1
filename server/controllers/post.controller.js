const post = require("../models/post.model")

//create a new post

module.exports.addPost = async (req , res)=>{
    const {title , description} = req.body;
    try{
        const post = await post.create({title , description})
        res.statut(201).json('post added ${post}')
    }
    catch(err){
        res.statut(500).json({message : err})
    }
}