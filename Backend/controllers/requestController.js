const express = require("express");
const reqModel = require("../schemas/requestModels.js");
const postModel = require("../schemas/postModel.js");


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
        const postId = req.postId
        const personId = req.personId
        const months = req.months

        const result = await reqModel.updateOne(
            {postId: postId},
            {$push : {pending:{
                pendingUserid : personId,
                months: months
            }
            }}
        );

        res.status(200).json({message:"succesful update",result});
        
    }catch(err){
        console.error("this error occured:",err);
        res.status(500).json({error:"failed to update pending "})
    }
}

module.exports = {givePostrequest,createNewReq};
