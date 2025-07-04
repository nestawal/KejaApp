const mongoose = require("mongoose")

const PostSchema = mongoose.Schema(
    {
         email: String,
         imageId: mongoose.Schema.Types.ObjectId,
         
        posts:{
            
            name: String,
            description: String,
            price: Number,
            rooms: Number,
             
        }
    },
        {
            timestamps: true
        }

);

const Post = mongoose.model("Post",PostSchema);

module.exports = Post;

