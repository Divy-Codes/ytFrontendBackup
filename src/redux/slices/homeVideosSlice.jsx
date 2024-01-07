import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api";

export const getVideosByCategory = createAsyncThunk(
  "videosByCategory/getVideosByCategory",
  async (keyword, { getState }) => {
    console.log(`prevToken:`, getState().homeVideos.nextPageToken);
    try {
      const { data } = await request.get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: keyword,
          pageToken: getState().homeVideos.nextPageToken,
          type: "video",
        },
      });

      console.log(`nextToken:`, data.nextPageToken);
      return {
        items: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      };
    } catch (error) {
      console.log(`error:`, error.message);
      return { error: error.message };
    }
  }
);

export const getHomeVideos = createAsyncThunk(
  "homeVideos/getHomeVideos",
  async (args, { getState }) => {
    try {
      const { data } = await request.get("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
        },
      });
      return {
        items: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      };
    } catch (error) {
      console.log(`Error:${error.message}`);
      return { error: error.message };
    }
  }
);

// const concatVideos=(oldVids,newVids)=>{
//   newVids.filter(newvid=>)
// }

const homeVideosSlice = createSlice({
  name: "homeVideos",
  initialState: {
    videos: [],
    nextPageToken: null,
    loading: false,
    activeCategory: "All",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomeVideos.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(getHomeVideos.fulfilled, (state, action) => {
        return {
          ...state,
          //Concat videos if active category is same. Implies another call made by infinite-scroll
          videos:
            state.nextPageToken !== action.payload.nextPageToken &&
            state.activeCategory === action.payload.category
              ? [...state.videos, ...action.payload.items]
              : action.payload.items,
          nextPageToken: action.payload.nextPageToken,
          activeCategory: action.payload.category,
          loading: false,
        };
      })
      .addCase(getHomeVideos.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload.error,
          loading: false,
        };
      })
      .addCase(getVideosByCategory.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(getVideosByCategory.fulfilled, (state, action) => {
        console.log(`entered categ fulfilled loop`);
        return {
          ...state,
          videos:
            state.nextPageToken !== action.payload.nextPageToken &&
            state.activeCategory === action.payload.category
              ? [...state.videos, ...action.payload.items]
              : action.payload.items,
          loading: false,
          nextPageToken: action.payload.nextPageToken,
          activeCategory: action.payload.category,
        };
      })
      .addCase(getVideosByCategory.rejected, (state, action) => {
        return { ...state, error: action.payload.error, loading: false };
      });
  },
});

export default homeVideosSlice.reducer;

//Try this:-
// const videosSlice = createSlice({
//   name: 'videos',
//   initialState: {
//     videos: [],
//     nextPageToken: null,
//   },
//   reducers: {
//     setVideos(state, action) {
//       state.videos = action.payload;
//     },
//     concatVideos(state, action) {
//       const newVideos = action.payload.filter((newVideo) => {
//         return !state.videos.some((existingVideo) => existingVideo.id === newVideo.id);
//       });
//       state.videos = state.videos.concat(newVideos);
//     },
//     setNextPageToken(state, action) {
//       state.nextPageToken = action.payload;
//     },
//   },
// });
