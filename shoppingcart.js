var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ShoppingCarts = new Schema({
    id: Number,
    name: String,
    price: Number,
    description: String,
    brand: String,
    producer: String,
    inventory: Number,
    imageurl: String,
});

module.exports = mongoose.model('ShoppingCarts', ShoppingCarts);
