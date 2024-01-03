import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import homeVideosSlice from "./slices/homeVideosSlice";
export const store = configureStore({
  reducer: {
    authObject: authReducer,
    homeVideos: homeVideosSlice,
  },
});
