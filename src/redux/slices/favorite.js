import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addFavorite, getFavorite } from "../../utils/https/favorite";

const initialState = {
  favorite: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  err: null,
};

const addFavThunk = createAsyncThunk(
  "addFavorite",
  async ({ token, prodId }, controller) => {
    try {
      const response = await addFavorite(token, prodId, controller);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const getFavThunk = createAsyncThunk(
  "getFavorite",
  async ({ token }, controller) => {
    console.log(token);
    try {
      const response = await getFavorite(token, controller);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    resetFav: () => {
      return initialState;
    },
  },
  extraReducers: {
    [getFavThunk.pending]: (prevState) => {
      return {
        ...prevState,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    },
    [addFavThunk.fulfilled]: (prevState, action) => {
      const idx = action.payload.data.map((product) => product.id);
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        favorite: prevState.favorite.concat(idx),
      };
    },

    [getFavThunk.rejected]: (prevState, action) => {
      return {
        ...prevState,
        isLoading: false,
        isRejected: true,
        err: action.payload,
      };
    },
    // add favorite
    [addFavThunk.pending]: (prevState) => {
      return {
        ...prevState,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    },
    [addFavThunk.fulfilled]: (prevState, action) => {
      return {
        ...prevState,
        isLoading: false,
        isFulfilled: true,
        favorite: prevState.favorite.concat(action.payload.data[0].prod_id),
      };
    },
    [addFavThunk.rejected]: (prevState, action) => {
      return {
        ...prevState,
        isLoading: false,
        isRejected: true,
        err: action.payload,
      };
    },
  },
});

export const favoriteAction = {
  ...favoriteSlice.actions,
  addFavThunk,
  getFavThunk,
};
export default favoriteSlice.reducer;
