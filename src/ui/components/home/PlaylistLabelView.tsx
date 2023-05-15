import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Assets, {Asset} from '../../../assets';
import {AssetImage} from '../../../assets/AssetImage';
import {Flashcard, MultipleChoiceQuestion} from '../../../network/types';

type Props = {
  item: Flashcard | MultipleChoiceQuestion;
};

export default ({item}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <AssetImage asset={Assets.playlistIcon} height={16} />
      </View>
      <Text style={styles.labelText}>{item.playlist}</Text>
      <View style={{flex: 1}} />
      <View style={{alignSelf: 'center'}}>
        <AssetImage asset={Assets.rightArrowIcon} height={14} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 36,
    backgroundColor: '#FFFFFF1A',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  labelText: {
    color: 'white',
    fontSize: 13,
    alignSelf: 'center',
    marginStart: 4,
  },
});
