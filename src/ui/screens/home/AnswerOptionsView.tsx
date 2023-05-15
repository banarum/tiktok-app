import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
  MultipleChoiceOption,
  MultipleChoiceQuestion,
} from '../../../network/types';
import {RootState} from '../../../store';

type Props = {
  item: MultipleChoiceQuestion;
};

export default (props: Props) => {
  const correctAnswer = useSelector(
    (state: RootState) => state.answer.answers[props.item.id],
  );

  const [chosenAnswers, setChosenAnswers] = React.useState<
    Array<MultipleChoiceOption>
  >([]);

  const getAnswerColor = (option: MultipleChoiceOption) => {
    if (!correctAnswer) {
      if (chosenAnswers.includes(option)) {
        return '#FFFF00BB';
      } else {
        return '#FFFFFF33';
      }
    } else {
      if (
        correctAnswer.correct_options.find(
          correctOption => correctOption.id == option.id,
        )
      ) {
        return 'green';
      } else if (chosenAnswers.includes(option)) {
        return 'red';
      } else {
        return '#FFFFFF33';
      }
    }
  };

  return (
    <View style={styles.container}>
      {props.item.options.map((option, index) => {
        return (
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {backgroundColor: getAnswerColor(option)},
            ]}
            key={index}
            onPress={() => {
              if (!chosenAnswers.includes(option)) {
                setChosenAnswers([...chosenAnswers, option]);
              } else {
                setChosenAnswers(
                  chosenAnswers.filter(chosenOption => chosenOption != option),
                );
              }
            }}>
            <Text style={styles.optionText}>{option.answer}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF33',
    borderRadius: 8,
    marginVertical: 4,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  optionText: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
    fontFamily: 'SF Pro Rounded',
  },
});
