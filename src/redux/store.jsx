import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import homeVideosSlice from "./slices/homeVideosSlice";
import videoByIdSlice from "./slices/videoByIdSlice";
export const store = configureStore({
  reducer: {
    authObject: authReducer,
    homeVideos: homeVideosSlice,
    // selectedVideoDetails: videoByIdSlice,
  },
});
