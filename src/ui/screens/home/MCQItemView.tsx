import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {MultipleChoiceQuestion} from '../../../network/types';
import SocialButtonsView from '../../components/home/SocialButtonsView';

import * as AppConstants from '../../../utils/AppConstants';
import PlaylistLabelView from '../../components/home/PlaylistLabelView';
import SectionLabelView from '../../components/home/SectionLabelView';
import AnswerOptionsView from './AnswerOptionsView';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../../store';
import {fetchItems} from '../../../store/slices/QuestionsSlice';
import {useFocusEffect} from '@react-navigation/native';

type Props = {
  item: MultipleChoiceQuestion;
};

export default ({item}: Props) => {
  return (
    <View style={styles.verticalContainer}>
      <View style={styles.horizontalContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.questionText}>{item.question}</Text>
          </View>
          <View style={{flex: 1}}>
            <AnswerOptionsView item={item} />
            <SectionLabelView item={item} />
          </View>
        </View>
        <SocialButtonsView item={item} />
      </View>
      <PlaylistLabelView item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 16,
  },
  horizontalContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  verticalContainer: {
    height:
      Dimensions.get('window').height -
      AppConstants.Sizes.tabs.height! -
      AppConstants.Sizes.header.height!,
    flexDirection: 'column',
  },
  questionText: {
    color: 'white',
    fontSize: 21,
    fontFamily: 'SF Pro Rounded',
  },
});
