export type QuestionType = 'flashcard' | 'mcq';

export type User = {
  name: string;
  avatar: string;
};

export type Flashcard = {
  id: number;
  type: QuestionType;
  playlist: string;
  flashcard_front: string;
  flashcard_back: string;
  description: string;
  uniqueId: string;
  user: User;
};

export type MultipleChoiceOption = {
  id: string;
  answer: string;
};

export type MultipleChoiceQuestion = {
  id: number;
  type: QuestionType;
  playlist: string;
  description: string;
  question: string;
  user: User;
  uniqueId: string;
  options: Array<MultipleChoiceOption>;
};

export type MultipleChoiceAnswer = {
  id: number;
  correct_options: Array<MultipleChoiceOption>;
};

export type RevealRequest = {
  questionId: number;
};
