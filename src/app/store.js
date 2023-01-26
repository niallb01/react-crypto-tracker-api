import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
//reducer is an object - we put in reducers that we create
export const store = configureStore({
  reducer: {
    coins: counterReducer,
  },
});
