import { createSlice, nanoid } from "@reduxjs/toolkit";
import products from "../data";


const initialState = {
    products:products,
    cart:[]
}

export const productSlice = createSlice({
    name:"product", 
    initialState, 
    reducers:{
        addToCart: (state, action) => {
            const product = action.payload;
            const isInCart = state.cart.some((item) => item.id === product.id);
            if (!isInCart) {
                state.cart.push({ ...product, isInCart: true });
            }
        },
        

        removeFromCart: (state, action) => {
            state.cart = state.products.filter((prod) => {prod.isInCart !== action.payload})
        }
    }
})

export const {addToCart, removeFromCart} = productSlice.actions
export default productSlice.reducer;