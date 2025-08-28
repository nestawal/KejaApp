const idmodel = "../models/identityModel";
const Identitymodel = require(idmodel);
const Cart = require("../models/cartModel");



const createIdentity = async(req,res) =>{
    try{
        //create new identity
        const newId = await Identitymodel.create(req.body)

        //create identity cart
        const newCart = await Cart.create({
            email: newId.email,
            items: []
        })

        res.json({
            user: newId,
            cart: newCart
        })
    }
    catch(err){  res.status(500).json({ error: err.message });}
};

const checkIdentity =(req,res)=>{
    const{email,password}= req.body
    Identitymodel.findOne({email: email})
    .then(person=>{
       if(person){
        if(person.password === password){
            res.json({status:"found",person})
        }else{
            res.json("wrong password")
        }
       }else{
        res.json("nowhere to be found")
       }
    })
    .catch(err => res.json(err))
};

const isAdmin=(req,res)=>{
    const{email} = req.body
    Identitymodel.findOne({email : email})
    .then(person=>{
        if(person){
            if(person.agent === true){
                res.json("user is registered as agent")
            }else{
                res.json("Do U want to sign is as an agent?")
            }
        }else{
            res.json("person not in the system")
        }
    })
    .catch(err => res.json(err))
};



module.exports = {
    createIdentity,
    checkIdentity,
    isAdmin
};