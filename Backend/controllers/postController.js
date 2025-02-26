const Post = require("../models/postModel");
const pstMdl = "C:/Users/USER/kejaApp/Backend/models/postModel.js";
const postModel = require(pstMdl);
const fs = require("fs")
const path = require("path")




const createPost = (req,res)=>{
    var obj = {
        name : req.body.name,
        description: req.body.description,
        price: req.body.price,
        rooms: req.body.rooms,
        image : {
            data: fs.readFileSync(path.join(__dirname+"/uploads"+req.file.filename)),
            contentType : "image/png"
        }
    }
    postModel.create(obj)
    .then(Post => res.json(Post))
    .catch(err => res.json(err))
}

module.exports = {
    createPost
};