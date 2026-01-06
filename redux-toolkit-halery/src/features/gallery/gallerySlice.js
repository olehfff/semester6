import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    images: [
      { id: "1", title: "Гори", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80", favorite: false },
      { id: "2", title: "Море", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80", favorite: false },
      { id: "3", title: "Місто", url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80", favorite: false }
    ],
    selectedId: null
  },
  reducers: {
    addImage(state, action) {
      const { url, title } = action.payload;
      const id = String(Date.now()) + Math.floor(Math.random() * 1000);
      state.images.unshift({ id, url, title: title || "Без назви", favorite: false });
    },
    removeImage(state, action) {
      const id = action.payload;
      state.images = state.images.filter(img => img.id !== id);
      if (state.selectedId === id) state.selectedId = null;
    },
    toggleFavorite(state, action) {
      const img = state.images.find(i => i.id === action.payload);
      if (img) img.favorite = !img.favorite;
    },
    selectImage(state, action) {
      const id = action.payload;
      state.selectedId = state.selectedId === id ? null : id;
    }
  }
});

export const { addImage, removeImage, toggleFavorite, selectImage } = gallerySlice.actions;
export default gallerySlice.reducer;