import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

async function getApiData() {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=5&page=${10}&sparkline=true`
    );
    const now = Math.round(Date.now() / 1000);
    const sevenDaysAgo = Math.round(now - 86400);
    for (let index = 0; index < res.data.length; index++) {
      const element = res.data[index];
      const history = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${element.id}/market_chart/range?vs_currency=gbp&from=${sevenDaysAgo}&to=${now}`
      );
      //each entry will have correct data attached to it
      res.data[index].history = history.data;
      const description = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${element.id}`
      );
      res.data[index].coinDescription = description.data;
    }
  } catch (error) {
    console.log("Error", error);
  }
}

// lives in centralised pool- init state empty array
const initialState = {
  coinDescription: [],
};

export const descriptionSlice = createSlice({
  name: "coinDescription",
  initialState, // decription property with empty array - state you start out with
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setDescription: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = action.payload; //code we're running on state when we call that action
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { setDescription } = descriptionSlice.actions;

export default descriptionSlice.reducer;
