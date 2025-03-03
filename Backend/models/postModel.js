const mongoose = require("mongoose")

const PostSchema = mongoose.Schema(
    {
        image:{
            data : Buffer,
            contentType : String
        },
        title : String,
        description : String,
        rooms : Number,
        location : String,
        price : Number,
        Email : String
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post",PostSchema);

module.exports = Post;

