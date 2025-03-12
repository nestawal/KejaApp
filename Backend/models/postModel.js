const mongoose = require("mongoose")

const PostSchema = mongoose.Schema(
    {
        email: String,
        name: String,
        description: String,
        price: Number,
        rooms: Number,
        imageId: mongoose.Schema.Types.ObjectId
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post",PostSchema);

module.exports = Post;

