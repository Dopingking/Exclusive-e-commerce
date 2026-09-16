import { createSlice } from "@reduxjs/toolkit";

const loadWishlistFromStorage = () => {
  try {
    const storedWishlist = localStorage.getItem("wishlistItems");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  } catch (error) {
    return [];
  }
};

const saveWishlistToStorage = (items) => {
  try {
    localStorage.setItem("wishlistItems", JSON.stringify(items));
  } catch (error) {
    // Handle error
  }
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: loadWishlistFromStorage(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.wishlistItems.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.wishlistItems.push(action.payload);
        saveWishlistToStorage(state.wishlistItems);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload);
      saveWishlistToStorage(state.wishlistItems);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;