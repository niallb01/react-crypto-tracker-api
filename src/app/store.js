import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import currencyReducer from "../state/reducers/currencySlice";

//reducer is an object - we put in reducers that we create - reducer handles updating our state
export const store = configureStore({
  reducer: {
    currency: currencyReducer, // was counterReducer
  },
});
