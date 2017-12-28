var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategoriesSchema = new Schema({
    id: Number,
    name: String,
});

module.exports = mongoose.model('Categories', CategoriesSchema);