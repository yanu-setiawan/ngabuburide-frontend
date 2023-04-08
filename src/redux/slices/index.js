import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./auth";
import cartSlice from "./cart";
import searchSlice from "./search";

const reducers = combineReducers({
  user: userSlice,
  cart: cartSlice,
  search: searchSlice,
});

export default reducers;
