// Print receipt for provided basket

'use strict';

var clc = require('cli-color');

var stringifyAmount = function (amount) {
	return amount.toLocaleString('en-GB', {
		style: 'currency',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
		currencyDisplay: 'symbol',
		currency: 'GBP'
	});
};

module.exports = function (basket) {
	var totalPrice = 0, rows = [];
	basket.forEach(function (amount, item) {
		var itemTotalPrice = item.getTotalPrice(amount);
		totalPrice += itemTotalPrice;
		rows.push([item.name, stringifyAmount(item.itemPrice),
			'x ' + amount.toLocaleString('en-GB'), clc.bold(stringifyAmount(itemTotalPrice))]);
	});
	rows.push([clc.bold("Total"), '', '', clc.bold(stringifyAmount(totalPrice))]);

	console.log(clc.columns(rows, { columns: [{}, { align: 'right' }, { align: 'right' }] }));
};
