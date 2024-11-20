import { createSlice } from "@reduxjs/toolkit";
 

const initialState = {
    // Add your landing page state here
  msg: 'Welcome to the Landing Page',
};

const landingPageSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    
  },
});

export const {} = landingPageSlice.actions;
export default landingPageSlice.reducer;
