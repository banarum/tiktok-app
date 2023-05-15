import axios from 'axios';
import {
  FETCH_FOLLOWING_ENDPOINT,
  FETCH_FOR_YOU_ENDPOINT,
  GET_ANSWER_ENDPOINT,
} from './Constants';
import {
  Flashcard,
  MultipleChoiceAnswer,
  MultipleChoiceQuestion,
  RevealRequest,
} from './types';

export const fetchFollowingApiCall = async (): Promise<
  Flashcard | MultipleChoiceQuestion
> => {
  const response = await axios.get(FETCH_FOLLOWING_ENDPOINT);
  return response.data;
};

export const fetchForYouApiCall = async (): Promise<
  Flashcard | MultipleChoiceQuestion
> => {
  const response = await axios.get(FETCH_FOR_YOU_ENDPOINT);
  return response.data;
};

export const getAnswerToMCQApiCall = async ({
  questionId,
}: RevealRequest): Promise<MultipleChoiceAnswer> => {
  const response = await axios.get(`${GET_ANSWER_ENDPOINT}?id=${questionId}`);
  return response.data;
};
