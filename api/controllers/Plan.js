const Plan = require("../models/Plan");
const createError = require("../utils/error");
const Kitchen = require("../models/Kitchen");

const createPlan = async (req,res,next) => {
    const kitchenId = req.params.kitchenid;
    const newPlan = new Plan(req.body);

    try{
        const savedPlan = await newPlan.save();
        try{
            await Kitchen.findByIdAndUpdate(kitchenId, 
                {$push: 
                    {plans: savedPlan._id}});
        res.status(200).json(savedPlan);
        }catch(err){
            next(err);
        }

    }catch(err){
        next(err);
    }
};

const updatePlan = async (req,res,next) => {
    try {
        const updatedPlan = await Plan.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedPlan);
    } catch (err) {
        next(err);
    }
}

const deletePlan = async (req,res,next) => {
    const kitchenId = req.params.kitchenid;
    try {
        await Plan.findByIdAndDelete(req.params.id);
        try{
            await Kitchen.findByIdAndUpdate(kitchenId, 
                {$pull: 
                    {plans: req.params.id}});
        }catch(err){
            next(err);
        }
        res.status(200).json("Deleted Plan.");
    } catch (err) {
        next(err);
    }
}

const getPlan = async (req,res,next) => {
    try {
        const plan = await Plan.findById(
            req.params.id);
        res.status(200).json(plan);
    }  catch (err) {
        next(err);
    }
}

const getAllPlan = async (req,res,next) => {
    try {
        const plans = await Plan.find(
            req.params.id);
        res.status(200).json(plans);
    } catch (err) {
        next(err);
    }
}

module.exports = {createPlan, deletePlan, getPlan, getAllPlan, updatePlan};

