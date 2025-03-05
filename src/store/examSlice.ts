import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types
interface ExamState {
  answers: Record<string, string>;
}

// Load from localStorage
const loadFromLocalStorage = (): ExamState => {
  try {
    const storedData = localStorage.getItem('examResponses');
    return storedData ? JSON.parse(storedData) : { answers: {} };
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return { answers: {} };
  }
};

// Initial state
const initialState: ExamState = loadFromLocalStorage();

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<{ questionId: string; answer: string }>) => {
      state.answers[action.payload.questionId] = action.payload.answer;
    },
    resetExam: () => {
      localStorage.removeItem('examResponses');
      return { answers: {} };
    },
    saveToJson: (state) => {
      // This is optional, we'll handle download in component
      return state;
    }
  },
});

// Middleware to auto-save to localStorage
export const saveToLocalStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  if (action.type.startsWith('exam/')) {
    localStorage.setItem('examResponses', JSON.stringify(store.getState().exam));
  }
  return result;
};

export const { saveAnswer, resetExam, saveToJson } = examSlice.actions;
export default examSlice.reducer;