import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
// import auth from "../utils/firebase";
export const store = configureStore({
  reducer: {
    authObject: authReducer,
  },
});
