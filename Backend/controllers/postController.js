
const { GridFSBucket } = require('mongodb');
const multer = require('multer');
const path = require('path');
const postModel = require("../models/postModel.js");
const mongoose = require('mongoose');
const aws = require('aws-sdk');


/**
 * trying to ditch the gridfs/mongodb file storage to sdk 
 * then when posted return the id of the file for later use
 */

// Initialize GridFS
let gfs;
const conn = mongoose.connection;
conn.once('open', () => {
    gfs = new GridFSBucket(conn.db, { bucketName: 'uploads' });
});

// Set up multer to store files in memory
const upload = multer({ storage: multer.memoryStorage() });

// Create a new post with an image
const createPost = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        // Upload the file to GridFS
        const filename = Date.now() + path.extname(req.file.originalname);
        const writeStream = gfs.openUploadStream(filename, {
            contentType: req.file.mimetype,
        });

        writeStream.write(req.file.buffer);
        writeStream.end();

        writeStream.on('finish', async () => {
            // Create a new post with the GridFS file ID
            const newPost = new postModel({
                email: req.body.email,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                rooms: req.body.rooms,
                imageId: writeStream.id, // Store the GridFS file ID
            });

            await newPost.save();
            res.status(201).json(newPost);
        });

        writeStream.on('error', (error) => {
            console.error(error);
            res.status(500).json({ message: 'Error uploading file to GridFS.' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating post.' });
    }
};

// Get an image by ID
const getImage = async (req, res) => {
    try {
        const fileId = new mongoose.Types.ObjectId.createFromTime(req.params.id);

        // Find the file in GridFS
        const file = await gfs.find({ _id: fileId }).toArray();
        if (!file || file.length === 0) {
            return res.status(404).json({ message: 'File not found.' });
        }

        // Stream the file to the response
        const readStream = gfs.openDownloadStream(fileId);
        readStream.pipe(res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving file.' });
    }
};


const getPostFeed = async (req,res) => {
    try{
        const conn = mongoose.connection;
        const bucket = new GridFSBucket(conn.db,{
            bucketName : 'uploads'
        });

        const posts = await postModel.find({});
        console.log(typeof postModel);
        console.log(postModel);
        const enrPosts = await Promise.all(posts.map(async (post) =>{
            if (!post.fileId) return post;

            const chunks = [];
            const stream = openDownloadStream(post.fileId);

            return new Promise((resolve,reject) => {
                stream.post('data',(chunk) => chunks.push(chunk));
                stream.on('error',(err) => reject(err));
                stream.on('end',() =>{
                    const fileBuffer = Buffer.concat(chunks);
                    const fileBase64 = fileBuffer.toString('base64');

                    resolve({
                        ...post.toObject(),
                        file : fileBase64
                    });
                });
            });
        }));
        res.status(200).json(enrPosts);
    } catch (error){
        console.log("error retrieving posts:",error);
        res.status(500).json({message:"server error",error:error.message})
    };

};


module.exports = { upload, createPost, getImage ,getPostFeed};