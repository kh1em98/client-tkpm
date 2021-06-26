import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import _, { initial } from 'lodash';
import { Role, Account } from '../../models/Account';
import { ISignInForm } from '../../pages/betterLogin/SignInForm';
import { authService } from '../../services';
import { transformToLoginUser } from '../../utils/helper';

interface UserState {
  id: number;
  email: string;
  username: string;
  age: number;
  phone: string;
  role: Role;
  isFetching: boolean;
}

const initialState = {
  id: 0,
  email: '',
  username: '',
  age: 0,
  phone: '',
  role: Role.USER,
  isFetching: true,
} as UserState;

export const signIn = createAsyncThunk(
  'users/sign_in',
  async (body: ISignInForm, thunkAPI) => {
    try {
      const user = await authService.loginWithEmail(body);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const asyncSignOut = createAsyncThunk(
  'users/sign_out',
  async (body, thunkAPI) => {
    authService.logout();
    return initialState;
  },
);

export const getLoginUser = createAsyncThunk(
  'users/get_login/user',
  async (body, thunkAPI) => {
    console.log('get login user');
    const loginUser = authService.getLoginUser();
    return loginUser;
  },
);

const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        Object.assign(state, transformToLoginUser(action.payload));
      })
      .addCase(asyncSignOut.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(asyncSignOut.fulfilled, (state, action) => {
        console.log('action payload : ', action.payload);
        Object.assign(state, action.payload);
        state.isFetching = false;
      })
      .addCase(getLoginUser.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(getLoginUser.fulfilled, (state, action) => {
        console.log('get login user fulfill');
        state.isFetching = false;
        if (action.payload !== null) {
          Object.assign(state, action.payload);
        }
      });
  },
});
export const userSelector = (state) => state.user;

export default reducer;
