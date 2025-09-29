const express = require("express");
const reqModel = require("../schemas/requestModels.js");
const postModel = require("../schemas/postModel.js");
const mongoose = require("mongoose")
const { ObjectId } = require('mongodb');



async function givePostrequest(req,res){
    //this is to update already posted posts to have a request section
    try{
        const posts = await postModel.find({},'_id');

        const newRequests = posts.map(post=>({
            postId : post._id
        }))

        await reqModel.insertMany(newRequests);
        console.log("requests succesfully made")
         res.status(201).json(newRequests);
    }catch(err){
        console.log("following error caught:",err);
        res.status(500).json({error:"failed:",details:err});
    }
}


const createNewReq = async(req,res)=>{
    
    try{
        const postId =req.body.postId
        const personId =req.body.personId
        const months = req.months
        console.log('postId:', postId, 'Length:', postId?.length);


        const doc = await reqModel.findOne({ postId: postId });
        console.log("Matched doc:", doc);

        const newPending ={
            pendingUserid : personId,
            months : months
        }

        const result = await reqModel.updateOne(
            {postId: postId},
            {$push : {pending: newPending}}
        );

        res.status(200).json({message:"succesful update",result});
        if(result.modifiedCount > 0){
            console.log("Succesfully updated")
        }else{
            console.log("failed update")
        }
        
    }catch(err){
        console.error("this error occured:",err);
        res.status(500).json({error:"failed to update pending "})
    }
}

//create endpoint to get pending usesrs/accepted users
module.exports = {givePostrequest,createNewReq};
