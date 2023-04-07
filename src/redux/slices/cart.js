import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: "",
  shoppingCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCounter: () => {
      return initialState;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
