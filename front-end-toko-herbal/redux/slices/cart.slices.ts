import { createSlice } from "@reduxjs/toolkit";
import { totalmem } from "os";
import { IProduct } from "../../containers/Product/Products.types";
export interface ICartItem extends IProduct {
  qty: number;
}
interface IState {
  totalCart: number;
  cartItems: ICartItem[];
}

const initialState: IState = {
  totalCart: 0,
  cartItems: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    clearCard: (state) => {
      state.cartItems = [];
      state.totalCart = 0;
    },
    addTocard: (state, action) => {
      const add = state.cartItems.map((e) => {
        if (e.id === action.payload.id) {
          return {
            ...e,
            qty: e.qty + 1,
          };
        }
        return e;
      });

      if (
        state.cartItems.length === 0 ||
        state.cartItems.find((e) => e.id === action.payload.id) === undefined
      ) {
        add.push({ ...action.payload, qty: 1 });
      }
      state.cartItems = add;
    },
    removeFromCard: (state, action) => {
      const remove = state.cartItems.filter((a) => a.id !== action.payload.id);
      state.cartItems = remove;
    },

    incrementQty: (state, action) => {
      const add = state.cartItems.map((e) => {
        if (e.id === action.payload.id) {
          return {
            ...e,
            qty: e.qty + 1,
          };
        }
        return e;
      });
      state.cartItems = add;
    },
    decrementQty: (state, action) => {
      const add = state.cartItems.map((e) => {
        if (e.id === action.payload.id) {
          return {
            ...e,
            qty: e.qty - 1,
          };
        }
        return e;
      });
      state.cartItems = add;
    },
  },
});

export const {
  addTocard,
  removeFromCard,
  incrementQty,
  decrementQty,
  clearCard,
} = cartSlice.actions;
export default cartSlice.reducer;
