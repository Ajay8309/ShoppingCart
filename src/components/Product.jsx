import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/productSlice';

const Product = ({ id, name, price, image, isCart }) => {
    const cartData = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const data = { id, name, price, image }; 

    const handleAddCart = (id) => {
        const isInCart = cartData.some((prod) => prod.id === id);
        if (isInCart) {
            console.log("Product already in cart");
        } else {
            dispatch(addToCart(data));
        }
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">${price.toFixed(2)}</p>
                {isCart && (
                    <button onClick={() => handleRemove(id)}>Remove</button>
                )}
                
                <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddCart(id)}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
