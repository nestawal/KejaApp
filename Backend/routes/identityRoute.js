const express =  require("express");
const { isAdmin } = require("../controllers/identityController");
const Controller = "C:/Users/USER/kejaApp/Backend/controllers/identityController"
const router = express.Router();
const {createIdentity,checkIdentity} = require(Controller)


router.post("/signup",createIdentity);
router.post("/login",checkIdentity);
router.post("/isAdmin",isAdmin);

module.exports = router;