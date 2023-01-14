const express = require("express");
const { createKitchen, updateKitchen, deleteKitchen, getKitchen, getAllKitchen, countByKitchen } = require("../controllers/kitchen.js");
const router = express.Router();
const Kitchen = require('../models/Kitchen.js');
const createError = require('../utils/error.js');
const { verifyAdmin } = require("../utils/verifyToken.js");

//Create
router.post("/",verifyAdmin, createKitchen)

//Update
router.put("/:id",verifyAdmin, updateKitchen)

//Delete
router.delete("/:id", deleteKitchen)

//Get
router.get("/find/:id", getKitchen)

//Get All
router.get("/", getAllKitchen)
// router.get("/countByType", countByType)
router.get("/countByKitchen", countByKitchen)

module.exports = router