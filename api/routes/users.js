const express = require("express");
const {updateUser, deleteUser, getUser, getAllUser } = require("../controllers/User.js");
const router = express.Router();
const User = require('../models/User.js');
const createError = require('../utils/error.js');
const {verifyToken,verifyUser,verifyAdmin} = require('../utils/verifyToken');

// router.get("/checkauthentication", verifyToken, (req,res,next) => {
//     res.send("hello, you are logged in");
// });

// router.get("/checkuser/:id",verifyUser, (req, res, next) => {
//     res.send("hello,user, you are logged in and you can delete your acc");
// })

// router.get("/checkadmin/:id",verifyAdmin, (req, res, next) => {
//     res.send("hello,admin, you are logged in and you can delete all acc");
// })
//Update
router.put("/:id",verifyUser, updateUser);
//Delete
router.delete("/:id",verifyUser, deleteUser);
//Get
router.get("/:id",verifyUser, getUser);
//Get All
router.get("/",verifyAdmin, getAllUser);

module.exports = router