// All items in shop.
// In a real world app, we would have this either stored in db or have dedicated module per item

'use strict';

var StoreItem   = require('./store-item')
  , threeForTwo = require('./store-item/get-total-price/three-for-two');

exports.apple = new StoreItem("Apple", 0.25);
exports.orange = new StoreItem("Orange", 0.3);
exports.garlic = new StoreItem("Garlic", 0.15);
exports.papaya = Object.assign(new StoreItem("Papaya", 0.5), { getTotalPrice: threeForTwo });
