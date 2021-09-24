import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import router from "next/router";
import api from "../../api";
import type { RootState } from "../../store";

// Define a type for the slice state
interface MenuState {
  categories: any;
}

// Define the initial state using that type
const initialState: MenuState = {
  categories: [],
};

export const menuSlice = createSlice({
  name: "menu",

  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getCategories: (state, action: PayloadAction<string | null>) => {
      state.categories = action.payload;
    },
  },
});

// Asynchronous thunk action
export function fetchCategories() {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`
      );

      const data = response.data;

      dispatch(getCategories(data));
    } catch (error: any) {
      dispatch(getCategories(null));
    }
  };
}

export const { getCategories } = menuSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMenu = (state: RootState) => state.menu;

export default menuSlice.reducer;
