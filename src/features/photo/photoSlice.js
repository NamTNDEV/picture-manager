import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
  name: "photos",
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    updatePhoto: (state, action) => {
      const updatedPhoto = action.payload;
      if (updatedPhoto?.id) {
        state[updatedPhoto.id] = updatedPhoto;
      }
    },
    removePhoto: (state, action) => {
      const removedId = action.payload;
      return state.filter((state) => state.id !== removedId);
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, updatePhoto, removePhoto } = actions;
export default reducer;
