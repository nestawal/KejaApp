const cartModel = require("../models/cartModel");
const express = require('express');

/**tasks
 * create will be done in identities controller
 * add records function
 * delete records function
 * retrive records function
 */

/*const createCart =(req,res,email,id)=>{
    cartModel.create({
        email : email,
        id: id
    })
    .then(
        Cart => res.json(Cart)
    )
    .catch(err => res.json(err))
};

module.exports = {createCart}*/

//add to cart method
const addToCart= (req,res)=>{
    const{email,productId} = req.body;
    cartModel.findOne({email: email})
    .then(cart=>{
        if(cart){
            cart.items.push(productId);
            cart.save();
            res.json({
                success: true,
                message: 'Item added to cart successfully',
                cart
            })
        }
        else{
            res.json("Cart not found");
        }
    })
    .catch(err => res.json(err))
}

module.exports= {addToCart}
