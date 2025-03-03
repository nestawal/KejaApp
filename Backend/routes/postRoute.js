const express = require("express");
const Controller = "C:/Users/USER/kejaApp/Backend/controllers/postController.js"
const router = express.Router();
const {createPost} = require(Controller)
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null,"uploads")
    },
    filename : (req,file,cb) => {
        cb(null,Date.now + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

router.post("/publish",upload.single("image"),createPost);

module.exports = router;