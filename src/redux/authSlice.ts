import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resetExam } from "../store/examSlice"; // ✅ Correct for parent directory

interface AuthState {
  user: { name: string; email: string } | null;
}

const initialState: AuthState = { user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// ✅ Create a thunk action to reset the exam state on login/logout
export const loginUser = (userData: { name: string; email: string }) => (dispatch: any) => {
  dispatch(resetExam()); // ✅ Clears Redux answers when a new login happens
  dispatch(authSlice.actions.login(userData));
};

export const logoutUser = () => (dispatch: any) => {
  dispatch(resetExam()); // ✅ Clears Redux answers on logout
  dispatch(authSlice.actions.logout());
};

export default authSlice.reducer;
