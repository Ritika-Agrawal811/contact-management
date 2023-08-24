import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contactSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
