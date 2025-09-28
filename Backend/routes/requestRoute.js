const express = require("express");
const router = express.Router();
const {givePostrequest,createNewReq} = require("../controllers/requestController")

router.post("/giverequestSec",givePostrequest);
router.patch("/addNewreq",createNewReq);

module.exports = router;
