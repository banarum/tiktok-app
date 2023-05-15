import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Assets, {Asset} from '../../../assets';
import {AssetImage} from '../../../assets/AssetImage';
import {Flashcard, MultipleChoiceQuestion} from '../../../network/types';
import {useAppDispatch} from '../../../store';
import {getAnswerToMCQ} from '../../../store/slices/AnswersSlice';

type SocialButtonProps = {
  icon: Asset;
  text?: string;
  onPress?: () => void;
};

const SocialButton = ({icon, text, onPress}: SocialButtonProps) => (
  <TouchableOpacity style={styles.socialButtonContainer} onPress={onPress}>
    <AssetImage asset={icon} height={35} />
    <View style={styles.socialButtonGap} />
    <Text style={styles.socialButtonText}>{text}</Text>
  </TouchableOpacity>
);

type Props = {
  item: Flashcard | MultipleChoiceQuestion;
  onFlip?: () => void;
};

export default ({item, onFlip}: Props) => {
  const appDispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.paperButtonContainer}>
        <AssetImage asset={Assets.paperPlusIcon} height={55} />
      </TouchableOpacity>
      <SocialButton icon={Assets.likeIcon} text="87" />
      <SocialButton icon={Assets.commentsIcon} text="2" />
      <SocialButton icon={Assets.shareIcon} text="17" />
      <SocialButton icon={Assets.bookmarkIcon} text="203" />
      <SocialButton
        icon={Assets.flipIcon}
        onPress={
          onFlip ?? (() => appDispatch(getAnswerToMCQ({questionId: item.id})))
        }
        text="Flip"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 50,
    marginEnd: 16,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  paperButtonContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  socialButtonContainer: {
    alignItems: 'center',
    width: 50,
    height: 57,
    marginBottom: 17,
  },
  socialButtonGap: {
    flex: 1,
  },
  socialButtonText: {color: 'white', fontSize: 12},
});
