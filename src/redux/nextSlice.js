import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  checkedBrands: [],
  checkedCategorys: [],
  userInfo: null,
  sexCategory: "women",
  productCategory: "",
  headerSubmenu: "",
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    toggleBrand: (state, action) => {
      const brandTitle = action.payload;
      const isBrandChecked = state.checkedBrands.some(
        (b) => b.title === brandTitle
      );

      if (isBrandChecked) {
        state.checkedBrands = state.checkedBrands.filter(
          (b) => b.title !== brandTitle
        );
      } else {
        state.checkedBrands.push({ title: brandTitle });
      }
    },

    toggleCategory: (state, action) => {
      const category = action.payload;
      const isCategoryChecked = state.checkedCategorys.some(
        (b) => b._id === category._id
      );

      if (isCategoryChecked) {
        state.checkedCategorys = state.checkedCategorys.filter(
          (b) => b._id !== category._id
        );
      } else {
        state.checkedCategorys.push(category);
      }
    },
    setSexCategory: (state, action) => {
      state.sexCategory = action.payload;
    },
    setProductCategory: (state, action) => {
      state.productCategory = action.payload;
    },
    setHeaderSubmenu: (state, action) => {
      state.headerSubmenu = action.payload;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  addUser,
  removeUser,
  toggleCategory,
  toggleBrand,
  setSexCategory,
  setProductCategory,
  setHeaderSubmenu,
} = nextSlice.actions;
export default nextSlice.reducer;
