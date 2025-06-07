const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
   email: { 
        type: String, 
        required: true,  
        unique: true    
    },
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 }
    }],
    createdAt: { type: Date, default: Date.now }
});

const Cart = mongoose.model("Cart",CartSchema);

module.exports = Cart;