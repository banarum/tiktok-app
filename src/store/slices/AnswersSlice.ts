import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAnswerToMCQApiCall} from '../../network';
import {MultipleChoiceAnswer, RevealRequest} from '../../network/types';

export const getAnswerToMCQ = createAsyncThunk(
  'answersSlice/getAnswerToMCQ',
  async (params: RevealRequest, thunkApi) => {
    try {
      const response = await getAnswerToMCQApiCall(params);
      return response;
    } catch (e) {
      return thunkApi.rejectWithValue('Network error');
    }
  },
);

type State = {
  answers: Record<string, MultipleChoiceAnswer>;
  isLoading: boolean;
  error: string | null;
};

const initialState: State = {
  answers: {},
  isLoading: false,
  error: null,
};

const answersSlice = createSlice({
  name: 'AnswersSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAnswerToMCQ.fulfilled, (state: State, action) => {
      state.isLoading = false;
      const payload = action.payload as MultipleChoiceAnswer;
      state.answers[payload.id] = payload;
    });
    builder.addCase(getAnswerToMCQ.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(getAnswerToMCQ.rejected, (state: State, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default answersSlice.reducer;
