const idmodel = "C:/Users/USER/kejaApp/Backend/models/identityModel.js";
const Identitymodel = require(idmodel);

const createIdentity =(req,res)=>{
    Identitymodel.create(req.body)
    .then(Identity => res.json(Identity))
    .catch(err => res.json(err))
};

const checkIdentity =(req,res)=>{
    const{email,password}= req.body
    Identitymodel.findOne({email: email})
    .then(person=>{
       if(user){
        if(person.password === password){
            res.json("found")
        }else{
            res.json("wrong password")
        }
       }else{
        res.json("nowhere to be found")
       }
    })
};



module.exports = {
    createIdentity,
    checkIdentity
};