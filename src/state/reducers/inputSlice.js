import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: [],
};

// const handleInputs = (e) => {
//   const { name, value } = e.target;
//   setInput({
//     ...input,
//     [name]: value,
//   });
//   console.log(input);
// };

export const inputSlice = createSlice({
  name: "userInput",
  initialState, // coins property with empty array - state you start out with
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload; //code we're running on state when we call that action
    },
  },
});

export const { setInput } = inputSlice.actions;

export default inputSlice.reducer;
