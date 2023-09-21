import { configureStore } from "@reduxjs/toolkit";
import { advertReducer } from "./advertsSlice";

export const store = configureStore({
    reducer: {
      reducer: advertReducer,
    },
  });