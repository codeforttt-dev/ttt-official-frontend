import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newUser: null,
  isRegistered: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.newUser = action.payload;
      state.isRegistered = true;
    },
    clearRegistration: (state) => {
      state.newUser = null;
      state.isRegistered = false;
    },
  },
});

export const { registerUser, clearRegistration } = signupSlice.actions;
export default signupSlice.reducer;
