import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import { api } from "../features/api";

const store = configureStore({
  reducer: {
    app: appReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
