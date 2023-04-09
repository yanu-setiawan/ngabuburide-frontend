import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./auth";
import cartSlice from "./cart";
import searchSlice from "./search";
import favoriteSlice from "./favorite";

const reducers = combineReducers({
  user: userSlice,
  cart: cartSlice,
  search: searchSlice,
  favorite: favoriteSlice,
});

export default reducers;
