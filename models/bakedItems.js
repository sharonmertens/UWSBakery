const mongoose = require('mongoose');

const bakedItemSchema = new mongoose.Schema({
  description: String,
  ingredients: String,
  allergians: String,
  image: String,
  available: Boolean
});

const BakedItems = mongoose.model('BakedItem', bakedItemSchema);

module.exports = BakedItems;
