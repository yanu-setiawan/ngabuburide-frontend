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
        (item) => item.prod_id === action.payload.prod_id
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
    decremenQty: (prevState, action) => {
      const { idx, price } = action.payload;
      const existItem = prevState.shoppingCart[idx];
      const updatedItem = {
        ...existItem,
        qty: existItem.qty - 1,
        subtotal: existItem.subtotal - price,
      };
      const updatedCart = [
        ...prevState.shoppingCart.slice(0, idx),
        updatedItem,
        ...prevState.shoppingCart.slice(idx + 1),
      ];
      return { ...prevState, shoppingCart: updatedCart };
    },
    incremenQty: (prevState, action) => {
      const { idx, price } = action.payload;
      const existItem = prevState.shoppingCart[idx];
      const updatedItem = {
        ...existItem,
        qty: existItem.qty + 1,
        subtotal: existItem.subtotal + price,
      };
      const updatedCart = [
        ...prevState.shoppingCart.slice(0, idx),
        updatedItem,
        ...prevState.shoppingCart.slice(idx + 1),
      ];
      return { ...prevState, shoppingCart: updatedCart };
    },
    deleteItem: (prevState, action) => {
      const itemId = action.payload;
      const updatedCart = prevState.shoppingCart.filter(
        (item) => item.prod_id !== itemId
      );
      return { ...prevState, shoppingCart: updatedCart };
    },
    resetCart: () => {
      return initialState;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
