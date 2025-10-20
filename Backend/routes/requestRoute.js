const express = require("express");
const router = express.Router();
const {givePostrequest,createNewReq,acceptReq,getRequestById,returnReqRec} = require("../controllers/requestController")

router.post("/giverequestSec",givePostrequest);
router.patch("/addNewreq",createNewReq);
router.patch("/acceptReq",acceptReq)
router.get("/:id",getRequestById);
router.get("/:id",returnReqRec);

module.exports = router;
