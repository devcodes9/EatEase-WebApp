const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlanSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    menu: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Plan",PlanSchema);