import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer, { RootState } from './slices';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const dummyStoreToGetType = configureStore({ reducer: rootReducer });
export type AppStore = typeof dummyStoreToGetType;
export type AppDispatch = typeof dummyStoreToGetType.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default configureStore({
  reducer: rootReducer,
  // preloadedState: initialState,
});
