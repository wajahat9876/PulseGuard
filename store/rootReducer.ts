import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from './api/user/authApis';
import { userMainApi } from './api/user/mainApis';
import { userApi } from './api/user/userApi';
import configSlice from './slices/config/configSlice';
import userSlice from './slices/user/userSlice';

 
export const rootReducer = combineReducers({
 

  // user recuders
  user: userSlice,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [userMainApi.reducerPath]: userMainApi.reducer,



  config: configSlice,
});
