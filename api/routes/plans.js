const express = require("express");
const router = express.Router();
const { createPlan, updatePlan, deletePlan, getPlan, getAllPlan } = require("../controllers/Plan.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

//Create
router.post("/:kitchenid",verifyAdmin, createPlan)

//Update
router.put("/:id",verifyAdmin, updatePlan)

//Delete
router.delete("/:id/:kitchenid", deletePlan)

//Get
router.get("/:id", getPlan)

//Get All
router.get("/", getAllPlan)

module.exports = router