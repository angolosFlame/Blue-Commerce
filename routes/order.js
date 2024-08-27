const express = require('express');
const Order = require('../models/Order');
const auth = require('../middleware/auth');
const router = express.Router();

// Get user's order history
router.get('/', auth, async (req, res) => {
	  try {
		      const orders = await Order.find({ userId: req.user }).sort({ date: -1 });
		      res.json(orders);
		    } catch (err) {
			        res.status(500).json({ error: 'Server error' });
			      }
});

module.exports = router;
