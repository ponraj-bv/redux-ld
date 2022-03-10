import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "anna",
    email: "anna@gmail.com",
  },

  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}), // Setting state to Empty object
  },
});
export const { update, remove } = userSlice.actions;
export default userSlice.reducer;
