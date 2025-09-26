const mongoose = require("mongoose")

const requestSchema = mongoose.Schema(
    {
        
        postId: {type: mongoose.Schema.Types.ObjectId,ref : 'Post'},
         
        pending:[{
            pendingId : {type: mongoose.Schema.Types.ObjectId},
            timestamps: true
        }],

        accepted: {
            acceptedUserId: {type: mongoose.Schema.Types.ObjectId}
        },
        leased: {
            type:  Boolean,
            default : false
        }
    }
);

const Post = mongoose.model("Post",PostSchema);

module.exports = Post;