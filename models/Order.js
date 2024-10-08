const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	  products: [
		      {
			            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
			            quantity: { type: Number, default: 1 },
			          },
		    ],
	  total: { type: Number, required: true },
	  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
