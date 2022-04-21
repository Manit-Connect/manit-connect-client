import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    name: '',
    token: '',
  },
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    clearUser(state) {
      state.email = '';
      state.name = '';
      state.token = '';
    }
  }
})

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;