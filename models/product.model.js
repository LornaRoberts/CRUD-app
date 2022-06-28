const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    rating: {type: Number, required: false},
    notes: {type: String, required: false, max: 300},
});


// Export the model
module.exports = mongoose.model('Book', BookSchema);