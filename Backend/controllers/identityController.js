const idmodel = "C:/Users/USER/kejaApp/Backend/models/identityModel.js";
const Identitymodel = require(idmodel);
const Cart = require("C:/Users/USER/kejaApp/Backend/models/cartModel.js");



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
            res.json("found")
        }else{
            res.json("wrong password")
        }
       }else{
        res.json("nowhere to be found")
       }
    })
    .catch(err => res.json(err))
};



module.exports = {
    createIdentity,
    checkIdentity
};