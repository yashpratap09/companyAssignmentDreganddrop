const express = require("express")
const router = express.Router()
const projectController = require("../controller/projectController")


router.post("/createProject",projectController.createProject)
router.get("/getData",projectController.getData)
router.put("/updateData",projectController.updateData)




module.exports=router