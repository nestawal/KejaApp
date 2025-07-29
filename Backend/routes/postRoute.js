const express = require("express");
const Controller = "C:/Users/USER/kejaApp/Backend/controllers/postController.js"
const router = express.Router();
const { upload, createPost, getImage  ,getPostFeed } = require(Controller); // Adjust the path if necessary


router.post("/publish",upload.single("image"),createPost);

router.get('/image/:id', getImage);

router.get('/feed',getPostFeed);

module.exports = router;