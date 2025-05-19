const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
    {
        email: {String ,required},
        cart:{
            type:[{
                id: {Number ,required}
            }
            ]
        }
    }
);

const Cart = mongoose.model("Cart",CartSchema);

module.exports = Cart;