import { createSlice } from '@reduxjs/toolkit';
import { LoginCredentials } from '../../models/Account';
import { authService } from '../../services';

import { AppThunk, AppDispatch } from '../store';

const { reducer, actions } = createSlice({
  name: 'authentication',
  initialState: null,
  reducers: {
    setLoginUser: (_, action) => action.payload,
  },
});

export const loginWithEmail = (
  loginForm: LoginCredentials,
): AppThunk<Promise<any>> => {
  return async (dispatch: AppDispatch) => {
    const user = await authService.loginWithEmail(loginForm);
    dispatch(actions.setLoginUser(user));
    return user;
  };
};

export default reducer;
