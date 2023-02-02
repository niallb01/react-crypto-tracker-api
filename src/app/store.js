import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../state/reducers/currencySlice";
import currencyDescriptionReducer from "../state/reducers/descriptionSlice";

//reducer is an object - we put in reducers that we create - reducer handles updating our state - reducer has to be purely functional
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    currencyDescription: currencyDescriptionReducer,
  },
  // reducer: {
  //   currencyDescription: currencyDescriptionReducer,
  // },
});
