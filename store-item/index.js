// An abstract StoreItem class

'use strict';

module.exports = class StoreItem {
	constructor(name, itemPrice) {
		this.name = name;
		this.itemPrice = itemPrice;
	}
	getTotalPrice(amount) { return amount * this.itemPrice; }
};
