const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  courses: [],
  role: 0,
  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('login');
      console.log(action.payload);
      state.id = action.payload.uid;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.courses = action.payload.courses;
      state.role = action.payload.role;
    },
    logout: (state) => {
      console.log('logout');
      state.id = '';
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.courses = [];
      state.role = 0;
    },
  },
});

export const {
  login,
  logout,
} = authSlice.actions;

const { reducer } = authSlice;

export default reducer;
