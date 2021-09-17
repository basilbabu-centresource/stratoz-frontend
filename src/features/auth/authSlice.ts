import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import router from "next/router";
import type { RootState } from "../../store";

// Define a type for the slice state
interface AuthState {
  token: string | null;
  user: object | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",

  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    getUser: (state, action: PayloadAction<object | null>) => {
      state.user = action.payload;
    },
  },
});

// Asynchronous thunk action
export function login(credentials: any) {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/local`,
        credentials
      );

      console.log("Res", response.data);

      const data = response.data;

      await localStorage.setItem("token", data.jwt);

      dispatch(getToken(data.jwt));
      dispatch(getUser(data.user));
    } catch (error: any) {
      dispatch(getToken(null));
      dispatch(getUser(null));
    }
  };
}

// Asynchronous thunk action
<<<<<<< HEAD
export function register(credentials: any) {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/local/register/`,
        credentials
      );

      console.log("Res", response.data);

      const data = response.data;

      await localStorage.setItem("token", data.jwt);

      dispatch(getToken(data.jwt));
      dispatch(getUser(data.user));
    } catch (error: any) {
      dispatch(getToken(null));
      dispatch(getUser(null));
    }
  };
}

// Asynchronous thunk action
=======
>>>>>>> a82b540055a85b05d2a66552da5eca4ea17f7caa
export function logout() {
  return async (dispatch: any) => {
    try {
      alert("loging out");
      await localStorage.removeItem("token");

      dispatch(getToken(null));

      dispatch(getUser(null));

      router.push("/");
    } catch (error: any) {
      dispatch(getToken(null));

      dispatch(getUser(null));
    }
  };
}

// Asynchronous thunk action
export function validateToken(token: string) {
  return async (dispatch: any) => {
    try {
      alert("Fetching curent use detail");

      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/me`,
        headers
      );

      console.log("Res", response.data);

      const data = response.data;

      dispatch(getToken(token));

      dispatch(getUser(data));
    } catch (error: any) {
      dispatch(getToken(null));

      dispatch(getUser(null));
    }
  };
}

export const { getToken, getUser } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
