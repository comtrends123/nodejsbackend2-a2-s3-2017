var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ShoppingCarts = new Schema({
    id: Number,
    name: String,
});

module.exports = mongoose.model('ShoppingCarts', ShoppingCarts);