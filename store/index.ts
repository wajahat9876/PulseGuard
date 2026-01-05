import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";

import { authApi } from "./api/user/authApis";
import { userMainApi } from "./api/user/mainApis";
import { userApi } from "./api/user/userApi";
import reduxStorage from "./mmkv/mmkvStorage";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: reduxStorage,
  whitelist: ["user", "business", "config"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([authApi.middleware, userApi.middleware, userMainApi.middleware]),
    enhancers: (getDefaultEnhancers) =>
  getDefaultEnhancers().concat(devToolsEnhancer()),
  // enhancers: defaultEnhancers => [...defaultEnhancers, devToolsEnhancer()],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
