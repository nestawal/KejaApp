const express = require("express");
const Controller = "C:/Users/USER/kejaApp/Backend/controllers/postController.js"
const router = express.Router();
const {createPost} = require(Controller)
const multer = require("multer")

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null,"uploads/")
    }
})

router.post("/publish",createPost);

module.exports = router;