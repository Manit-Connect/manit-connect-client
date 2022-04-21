import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    username: '',
  },
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
    clearUser(state) {
      state.email = '';
      state.username = '';
    }
  }
})

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;