const mongoose = require('mongoose');
const { Schema } = mongoose;

const KitchenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    totalSubCnt: {
        type: Number,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        min: 0,
        max: 5
    },
    plans: {
        type: [String],
        required : true
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Kitchen",KitchenSchema);