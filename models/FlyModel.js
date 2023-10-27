var mongoose = require('mongoose');

var FlySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty"]
    },
    ropeller: {
        type: Number,
        min: 0
    },
    price: {
        type: Number,
        min: 0
    },
    image: {
        type: String,
    }
});

const FlyModel = mongoose.model('flys', FlySchema, 'flys');

module.exports = FlyModel;