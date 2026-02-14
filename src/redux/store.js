import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./slice/registrationSlice";
import loginReducer from "./slice/loginSlice";
 import  signupReducer from "./slice/signupSlice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
   login: loginReducer,
    signup: signupReducer,
  },
});
export default store;