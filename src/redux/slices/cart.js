import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCard: (prevState, action) => {
      const existIdx = prevState.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existIdx !== -1) {
        const existItem = prevState.shoppingCart[existIdx];
        const updatedItem = {
          ...existItem,
          qty: existItem.qty + action.payload.qty,
          subtotal: existItem.subtotal + action.payload.subtotal,
        };
        const updatedCart = [
          ...prevState.shoppingCart.slice(0, existIdx),
          updatedItem,
          ...prevState.shoppingCart.slice(existIdx + 1),
        ];
        return { ...prevState, shoppingCart: updatedCart };
      } else {
        const updatedCart = [...prevState.shoppingCart, action.payload];
        return {
          ...prevState,
          shoppingCart: updatedCart,
        };
      }
    },
    resetCart: () => {
      return initialState;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
