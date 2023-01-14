const Kitchen = require("../models/Kitchen");
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
            req.params.id);
        res.status(200).json(kitchens);
    } catch (err) {
        next(err);
    }
}
const countByKitchen = async (req,res,next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city => {
            return Kitchen.countDocuments({city: city});
        }))
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}


module.exports = {createKitchen, deleteKitchen, getKitchen, getAllKitchen, updateKitchen, countByKitchen};