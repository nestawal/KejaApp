const mongoose = require("mongoose")

const IdentitySchema = mongoose.Schema(
    {
        name:{
            type : String,
            required : false
        },
        email:{
            type : String,
            required : true
        },
        password:{
            type : String,
            required : true
        },
        balance:{
            type : Number
        }
    }
)

const Identitymodel = mongoose.model("Identity",IdentitySchema);

module.exports = Identitymodel;