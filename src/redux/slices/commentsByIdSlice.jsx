import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/api";

const initialState = {
  comments: null,
  loading: false,
  error: null,
  commentPosted: null,
};

export const postComment = createAsyncThunk(
  "commentthreads/postComment",
  async (args, { getState }) => {
    const { videoId, commentText } = args;
    console.log(`id,text`, videoId, commentText);
    try {
      console.log(`Entered postComment try part`);
      const dataObj = {
        snippet: {
          videoId: videoId,
          topLevelComment: {
            snippet: {
              textOriginal: commentText,
            },
          },
        },
      };

      // await request.post("/commentThreads", dataObj, {
      const response = await request.post("/commentThreads", dataObj, {
        params: {
          part: "snippet",
        },
        headers: {
          Authorization: `Bearer ${getState().authObject.accessToken}`,
        },
      });
      console.log(`postComment request done`);
      console.log(`comment posted response:`, response);
      return {
        commentPosted: response.data,
      };
    } catch (error) {
      console.log(`Comments Posting Error:`, error.message);
      console.log(`error:`, error.response.data);
      return { error: error.response.data };
    }
  }
);

export const getCommentsById = createAsyncThunk(
  "commentThreads/getCommentsById",
  async (id) => {
    try {
      const { data } = await request("/commentThreads", {
        params: {
          part: "snippet",
          videoId: id,
          maxResults: 25,
        },
      });
      console.log(`response by id:`, data);
      return {
        comments: data.items,
      };
    } catch (error) {
      console.log(`error:`, error.response.data);
      return { error: error.response.data };
    }
  }
);

const commentByIdSlice = createSlice({
  name: "commentInfo",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsById.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(getCommentsById.fulfilled, (state, action) => {
        return { ...state, loading: false, comments: action.payload.comments };
      })
      .addCase(getCommentsById.rejected, (state, action) => {
        return { ...state, loading: false, error: action.payload.error };
      })
      .addCase(postComment.fulfilled, (state, action) => {
        return { ...state, commentPosted: action.payload.commentPosted };
      })
      .addCase(postComment.rejected, (state, action) => {
        return { ...state, error: action.payload.error, commentPosted: null };
      });
  },
});

export default commentByIdSlice.reducer;
