import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// lives in centralised pool- init state empty array
const initialState = {
  portfolio: [],
};

export const addPortfolioSlice = createSlice({
  name: "portfolioItem",
  initialState, // coins property with empty array - state you start out with
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addPortfolio: (state, action) => {
      const handlePortfolioItem = (name) => {
        const portfolioCopy = [...state.portfolio];
        const found = portfolioCopy?.find((coin) => {
          return coin.name === name;
        });
        if (found) {
          const filtered = portfolioCopy.filter((coin) => {
            return coin.name !== name;
          });
          addPortfolio(filtered);
          return;
        }
        portfolioCopy.push({ name: name, quantity: "1" });
        addPortfolio(portfolioCopy);
      };
      state.portfolio = action.payload; //code we're running on state when we call that action
    },
  },
});

export const { addPortfolio } = addPortfolioSlice.actions;

// console.log("line 50 slice", addPortfolioSlice);

export default addPortfolioSlice.reducer;
