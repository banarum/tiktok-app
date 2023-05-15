import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchFollowingApiCall, fetchForYouApiCall} from '../../network';
import {Flashcard, MultipleChoiceQuestion} from '../../network/types';

type FetchType = 'following' | 'forYou';

export const fetchItems = createAsyncThunk(
  'QuestionsSlice/fetchItems',
  async (type: FetchType, thunkApi) => {
    try {
      const fetchApiCall =
        type === 'following' ? fetchFollowingApiCall : fetchForYouApiCall;

      const response = await fetchApiCall();

      if (response.type === 'mcq') {
        (response as MultipleChoiceQuestion).options = (
          response as MultipleChoiceQuestion
        ).options
          .map(value => ({value, sort: Math.random()}))
          .sort((a, b) => a.sort - b.sort)
          .map(({value}) => value);
      }

      response.uniqueId = `${type}-${response.id}-${Math.round(
        Math.random() * 10000,
      )}`; // uniqueId

      // Create array of items with unique ids
      return response;
    } catch (e: any) {
      return thunkApi.rejectWithValue('Network error');
    }
  },
);

type State = {
  following: Array<Flashcard | MultipleChoiceQuestion>;
  forYou: Array<Flashcard | MultipleChoiceQuestion>;

  forYouLoading: boolean;
  followingLoading: boolean;

  followingError: string | null | unknown;
  forYouError: string | null | unknown;
};

const initialState: State = {
  following: [],
  forYou: [],

  followingLoading: false,
  forYouLoading: false,

  followingError: null,
  forYouError: null,
};

const questionsSlice = createSlice({
  name: 'QuestionsSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchItems.fulfilled, (state: State, action) => {
      state[action.meta.arg] = [...state[action.meta.arg], action.payload];
      state[`${action.meta.arg}Loading`] = false;
    });
    builder.addCase(fetchItems.pending, (state: State, action) => {
      if (state[action.meta.arg].length === 0) {
        state[`${action.meta.arg}Loading`] = true;
      }
    });
    builder.addCase(fetchItems.rejected, (state: State, action) => {
      state[`${action.meta.arg}Error`] = action.payload;
      state[`${action.meta.arg}Loading`] = false;
    });
  },
});

export default questionsSlice.reducer;
