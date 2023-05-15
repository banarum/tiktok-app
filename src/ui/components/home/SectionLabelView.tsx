import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import {Flashcard, MultipleChoiceQuestion} from '../../../network/types';

type Props = {
  item: Flashcard | MultipleChoiceQuestion;
};

export default ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>AP US History</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 45,
    maxHeight: 60,
    flexDirection: 'column',
    marginBottom: 16,
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'SF Pro Rounded',
  },
  descriptionText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'SF Pro Rounded',
  },
  descriptionBoldText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
