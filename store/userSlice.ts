import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../types/types";

export interface userState {
  clips: Article[];
}

const initialState: userState = {
  clips: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addClip: (state, action: PayloadAction<Article>) => {
      const newClip = action.payload;
      state.clips.push(newClip);
    },
    deleteClip: (state, action: PayloadAction<Article>) => {
      const deletingClip = action.payload;
      const currentClips = state.clips;
      const fileteredClips = currentClips.filter((clip) => clip.url !== deletingClip.url);
      state.clips = fileteredClips;
    },
  },
});

export const { addClip, deleteClip } = userSlice.actions;

export default userSlice.reducer;
