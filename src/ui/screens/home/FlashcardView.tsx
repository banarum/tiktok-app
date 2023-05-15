import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Flashcard} from '../../../network/types';
import * as AppConstants from '../../../utils/AppConstants';
import PlaylistLabelView from '../../components/home/PlaylistLabelView';
import SectionLabelView from '../../components/home/SectionLabelView';
import SocialButtonsView from '../../components/home/SocialButtonsView';

type Props = {
  item: Flashcard;
};

export default ({item}: Props) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <View style={styles.verticalContainer}>
      <View style={styles.horizontalContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.questionText}>{item.flashcard_front}</Text>
          </View>
          <View style={{flex: 1}}>
            {isFlipped && (
              <Text style={styles.answerText}>{item.flashcard_back}</Text>
            )}
            <View style={{flex: 1}} />
            <SectionLabelView item={item} />
          </View>
        </View>
        <SocialButtonsView
          item={item}
          onFlip={() => setIsFlipped(!isFlipped)}
        />
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
  answerText: {
    color: '#FFFFFFB3',
    fontSize: 21,
    flex: 10,
    fontFamily: 'SF Pro Rounded',
  },
});
