const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        categories:{
            type:Array,
            required: false
        },
        photo: {
            type: String,
            required: false,
          },
          username: {
            type: String,
            required: true,
          },
        title:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,
            required:true
        },
        auteur:{
            id

        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Post" , postSchema);

