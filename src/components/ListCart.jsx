import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { useNavigate } from 'react-router-dom';

const ListCart = () => {
    const Products = useSelector((state) => state.products); 
    const cartProd = useSelector((state) => state.cart);

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    }

    return (
        <div className="product-list">
            <div className="cart-icon" onClick={handleHome}>
                🛒 Cart: <strong>{cartProd.length}</strong>
            </div>
            <div className="product-grid">
                {cartProd.map((prod) => (
                    <Product 
                        key={prod.id}
                        id={prod.id}
                        name={prod.name}
                        image={prod.image}
                        price={prod.price}
                        isCart={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListCart;
