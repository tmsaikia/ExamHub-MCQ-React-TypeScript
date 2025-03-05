import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { useDispatch } from "react-redux";
import examReducer from "../store/examSlice"; // ✅ Correct for parent directory";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    exam: examReducer,
  },
});

// Typed useDispatch hook
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
