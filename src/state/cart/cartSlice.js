import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || {}
  };
  

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item=action.payload

    
            if (state.items[item]){
                state.items[item] ++;
            }
            else{
                state.items={
                    ...state.items,
                    [item]:1
                }
            }
        },
        removeItem: (state, action) => {
            if (state.items[action.payload])
                delete state.items[action.payload];
        },
        setItemQuantity: (state, action) => {
            if (!state.items[action.payload.id])
                state.items = {
                    ...state.items,
                    [action.payload.id]: action.payload.quantity
                };
            if (action.payload.quantity === 0)
                delete state.items[action.payload.id];
            else
                state.items[action.payload.id] = action.payload.quantity;
        }, updateCart: (state) => {

            localStorage.setItem('cartItems', JSON.stringify(state.items));
          },
    },
})

export const { addItem, removeItem, setItemQuantity, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
