const express =  require("express");
//const Identitymodel = require("./models/identity.model.js");
//const Identitymodel = require('./models/identityModel.js');
const Controller = "C:/Users/USER/kejaApp/Backend/controllers/identityController"
const router = express.Router();
const {createIdentity,checkIdentity} = require(Controller)


router.post("/signup",createIdentity);
router.post("/login",checkIdentity);

module.exports = router;