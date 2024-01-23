import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api";

const initialState = {
  videos: [],
  error: null,
  loading: false,
  nextPageToken: null,
};

export const getSearchedVideos = createAsyncThunk(
  "searchedVideos/getSearchedVideos",
  async (query, { getState }) => {
    try {
      const { data } = await request("/search", {
        params: {
          part: "snippet",
          maxResults: 25,
          q: query,
          type: "video,channel",
          pageToken: getState().searchedVideos.nextPageToken,
        },
      });
      return {
        items: data.items,
        nextPageToken: data.nextPageToken,
      };
    } catch (error) {
      console.log(`error:`, error.response.data);
      return { error: error.response.data };
    }
  }
);

const searchedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSearchedVideos.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(getSearchedVideos.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          // videos: [...state.videos, ...action.payload.items],
          videos: [...new Set([...state.videos, ...action.payload.items])],

          nextPageToken: action.payload.nextPageToken,
        };
      })
      .addCase(getSearchedVideos.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload.error };
      });
  },
});

export default searchedVideoSlice.reducer;

// setBooks((prevBooks) => [
//   ...new Set([
//     ...prevBooks,
//     ...res.data.docs.map((book) => book.title),
//   ]),
// ]);
