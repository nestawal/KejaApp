const express = require("express");
const reqModel = require("../schemas/requestModels.js");
const postModel = require("../schemas/postModel.js");
const idModel = require("../schemas/identityModel.js")



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
        const months = req.body.months
        let name
        console.log('postId:', postId, 'Length:', postId?.length);


        const doc = await reqModel.findOne({ postId: postId });
        console.log("Matched doc:", doc);

        await  idModel.findOne({_id: personId})
            .then(data=>{
                name = data.name
                console.log(name);
            })

        const newPending ={
            pendingUserId : personId,
            months : months,
            name: name
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

const acceptReq=async(req,res)=>{
    try{
        const postId = req.body.postId;
        const months = req.body.months;
        const acceptedUserId = req.body.acceptedUserId;
        

        const newUpdate = {
            leased : true,
            accepted :{
                acceptedUserId : acceptedUserId,
                months : months,
                date : Date.now()
            }
        }
        console.log(newUpdate);

        const result = await reqModel.updateOne({postId:postId},newUpdate);

        res.status(200).json({message:"succesful update",result});
        if(result.modifiedCount > 0){
            console.log("Succesfully updated")
        }else{
            console.log("failed update")
        }
        
    }catch(e){
        console.error("this error occured:",e);
        res.status(500).json({error:"failed to update pending "})
    }
}
//create endpoint to get pending usesrs/accepted users
const getRequestById=async(req,res)=>{
   try{
     const {id} = req.params

    const requestedId = await reqModel.findOne({postId : id});

    res.status(200).json({requestedId});
   }catch(err){
        console.error("this error occured:",err);
        res.status(500).json({error:"failed to get request "})
   }
}
module.exports = {givePostrequest,createNewReq,acceptReq,getRequestById};
