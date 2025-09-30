const express = require("express");
const router = express.Router();
const {givePostrequest,createNewReq,acceptReq} = require("../controllers/requestController")

router.post("/giverequestSec",givePostrequest);
router.patch("/addNewreq",createNewReq);
router.patch("/acceptReq",acceptReq)

module.exports = router;
