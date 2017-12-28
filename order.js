var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Orders = new Schema({
    id: Number,
    name: String,
});

module.exports = mongoose.model('Orders', Orders);
