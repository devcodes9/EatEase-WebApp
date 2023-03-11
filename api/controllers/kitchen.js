const Kitchen = require("../models/Kitchen");
const Plan = require("../models/Plan");
const createKitchen = async (req,res,next) => {
    const newKitchen = new Kitchen(req.body);
    try {
        const savedKitchen = await newKitchen.save()
        res.status(200).json(savedKitchen);
    } catch (err) {
        next(err);
    }
}

const updateKitchen = async (req,res,next) => {
    try {
        const updatedKitchen = await Kitchen.findByIdAndUpdate(
            req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedKitchen);
    } catch (err) {
        next(err);
    }
}

const deleteKitchen = async (req,res,next) => {
    try {
        await Kitchen.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted Kitchen.");
    } catch (err) {
        next(err);
    }
}

const getKitchen = async (req,res,next) => {
    try {
        const kitchen = await Kitchen.findById(
            req.params.id);
        res.status(200).json(kitchen);
    }  catch (err) {
        next(err);
    }
}

const getAllKitchen = async (req,res,next) => {
    try {
        const kitchens = await Kitchen.find(
            req.query);
        res.status(200).json(kitchens);
    } catch (err) {
        next(err);
    }
}

const countByKitchen = async (req,res,next) => {
    const kitchens = req.query.kitchens.split(",");
    // console.log(kitchens);
    try {
        const list = [];
        for (let index = 0; index < kitchens.length; index++) {
            const doc = await Kitchen.findOne({name: kitchens[index]});
            list.push(doc.totalSubCnt);
        }
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}
const countByType = async (req,res,next) => {
    try {
        const gujCnt = await Kitchen.countDocuments({type: "Gujarati"})
        const northCnt = await Kitchen.countDocuments({type: "North Indian"})
        const southCnt = await Kitchen.countDocuments({type: "South Indian"})

        res.status(200).json([
            {type: "Gujarati", cnt : gujCnt},
            {type: "North Indian", cnt : northCnt},
            {type: "South Indian", cnt : southCnt}
        ]);
    } catch (err) {
        next(err);
    }
}

const getKitchenPlans = async (req, res, next) => {
    try{
        const kitchen = await Kitchen.findById(req.params.id);
        const list = await Promise.all(kitchen.plans.map(plan => {
            return Plan.findById(plan);
        }))
        res.status(200).json(list);
    }
    catch (err) {
        next(err);
    }
}

module.exports = {createKitchen, deleteKitchen, getKitchen, getAllKitchen, updateKitchen, countByKitchen, countByType, getKitchenPlans};