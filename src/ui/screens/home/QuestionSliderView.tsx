import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import * as AppConstants from '../../../utils/AppConstants';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {Flashcard, MultipleChoiceQuestion} from '../../../network/types';
import MCQItemView from './MCQItemView';
import FlashCardView from './FlashcardView';

type QuestionItemProps = {
  item: MultipleChoiceQuestion | Flashcard;
  translateY: Animated.SharedValue<number>;
  index: number;
};

export default ({item, translateY, index}: QuestionItemProps) => {
  const {height} = Dimensions.get('window');
  const inputRange = [
    (-index - 1) * height,
    index * height,
    (index + 1) * height,
  ];

  const rContainerStyle = useAnimatedStyle(() => {
    const scale = interpolate(translateY.value, inputRange, [
      0,
      0,
      -height / 2,
    ]);
    return {
      transform: [{translateY: scale}],
    };
  });

  const renderQuestion = () => {
    if (item.type === 'mcq') {
      return <MCQItemView item={item as MultipleChoiceQuestion} />;
    } else if (item.type === 'flashcard') {
      return <FlashCardView item={item as Flashcard} />;
    } else {
      return <View />;
    }
  };

  return (
    <LinearGradient style={styles.container} colors={['#001D28', '#00425A']}>
      <Animated.View style={rContainerStyle}>
        <View style={styles.questionContainer}>{renderQuestion()}</View>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    marginTop: AppConstants.Sizes.header.height!,
  },
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#05071B',
    paddingBottom: 100,
  },
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  userInfo: {
    marginLeft: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerDesc: {
    paddingHorizontal: 8,
    paddingTop: 5,
  },
  box: {
    width: Dimensions.get('window').width,
    height: 500,
    marginTop: 10,
  },
});
