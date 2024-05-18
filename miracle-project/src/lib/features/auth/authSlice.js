const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  email: 'test',
  password: 'test',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('login');
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      console.log('logout');
      state.email = null;
      state.password = null;
    },
  },
});

export const {
  login,
  logout,
} = authSlice.actions;

const { reducer } = authSlice;

export default reducer;
