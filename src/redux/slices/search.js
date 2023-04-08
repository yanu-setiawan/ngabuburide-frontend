import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearch: (prevState, action) => {
      return { ...prevState, search: action.payload };
    },
    resetSearch: () => {
      return initialState;
    },
  },
});

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;
