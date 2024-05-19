const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  firstname: '',
  lastname: '',
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
      state.id = action.payload.uid; //iterate
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.courses = action.payload.courses;
      state.role = action.payload.role;
    },
    logout: (state) => {
      console.log('logout');
      state.firstname = '';
      state.lastname = '';
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
