import {configureStore} from '@reduxjs/toolkit';
import answerSlice from './slices/AnswersSlice';
import {useDispatch} from 'react-redux';
import questionsSlice from './slices/QuestionsSlice';

const store = configureStore({
  reducer: {
    questions: questionsSlice,
    answer: answerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;

export default store;
