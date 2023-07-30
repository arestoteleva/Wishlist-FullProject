const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  link: { type: String, required: true },
  userId: { type: String, required: true },
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
