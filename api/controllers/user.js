const User = require("../models/User");

const updateUser = async (req,res,next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
}

const deleteUser = async (req,res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted User.");
    } catch (err) {
        next(err);
    }
}

const getUser = async (req,res,next) => {
    try {
        const user = await User.findById(
            req.params.id);
        res.status(200).json(user);
    }  catch (err) {
        next(err);
    }
}

const getAllUser = async (req,res,next) => {
    try {
        const users = await User.find(
            req.params.id);
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

module.exports = {deleteUser, getUser, getAllUser, updateUser};