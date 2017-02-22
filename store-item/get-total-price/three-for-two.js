// 3 for 2 computation of item total price
// to be used on StoreItem instances

'use strict';

module.exports = function (amount) {
	return (Math.floor(amount / 3) * 2 * this.itemPrice) + ((amount % 3) * this.itemPrice);
};
