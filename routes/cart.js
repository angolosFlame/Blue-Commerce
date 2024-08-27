const express = require('express');
const Cart = require('../models/Cart');
const auth = require('../middleware/auth');
const router = express.Router();

// Add item to cart
router.post('/', auth, async (req, res) => {
	  const { productId, quantity } = req.body;
	  try {
		      const cart = await Cart.findOne({ userId: req.user });
		      if (cart) {
			            // Check if product exists in cart
			            const itemIndex = cart.products.findIndex((p) => p.productId == productId);
			            if (itemIndex > -1) {
					            cart.products[itemIndex].quantity += quantity;
					          } else {
							          cart.products.push({ productId, quantity });
							        }
			          } else {
					        // Create new cart for user
					        const newCart = new Cart({
							        userId: req.user,
							        products: [{ productId, quantity }],
							      });
					        await newCart.save();
					        return res.json(newCart);
					      }
		      await cart.save();
		      res.json(cart);
		    } catch (err) {
			        res.status(500).json({ error: 'Server error' });
			      }
});

module.exports = router;
