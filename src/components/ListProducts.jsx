import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { useNavigate } from 'react-router-dom';

const ListProducts = () => {
    const Products = useSelector((state) => state.products); 
    const cartProd = useSelector((state) => state.cart);

    const navigate = useNavigate();

    const handleCart = () => {
        console.log("Ajay");
        navigate("/cart");
    }

    return (
        <div className="product-list">
            <div className="cart-icon" onClick={handleCart}>
                🛒 Cart: <strong>{cartProd.length}</strong>
            </div>
            <div className="product-grid">
                {Products.map((prod) => (
                    <Product 
                        key={prod.id}
                        id={prod.id}
                        name={prod.name}
                        image={prod.image}
                        price={prod.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListProducts;
