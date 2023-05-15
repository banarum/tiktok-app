import React, {useEffect} from 'react';

import QuestionSliderView from './QuestionSliderView';
import {View, Dimensions, StyleSheet, ActivityIndicator} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import SliderHeader from './SliderHeader';
import {RootState, useAppDispatch} from '../../../store';
import {useSelector} from 'react-redux';
import {fetchItems} from '../../../store/slices/QuestionsSlice';

export default () => {
  const translateY = useSharedValue(0);

  const [tab, setTab] = React.useState<number>(1);

  let otime = 0;

  const dispatch = useAppDispatch();

  const questions = useSelector((state: RootState) =>
    tab === 1 ? state.questions.following : state.questions.forYou,
  );

  const isLoading = useSelector((state: RootState) =>
    tab === 1
      ? state.questions.followingLoading
      : state.questions.forYouLoading,
  );

  useEffect(() => {
    // call redux toolkit action to fetch data
    dispatch(fetchItems('following'));
    dispatch(fetchItems('following'));
    dispatch(fetchItems('forYou'));
    dispatch(fetchItems('forYou'));
  }, [dispatch]);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <Animated.FlatList
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}
          data={questions}
          renderItem={({item, index}) => {
            if (index >= questions.length - 2) {
              // Make sure we don't fetch more than once
              if (otime < Date.now() - 500) {
                dispatch(fetchItems(tab === 1 ? 'following' : 'forYou'));
                otime = Date.now();
                console.log('fetching more');
                console.log(otime, Date.now());
              }
            }

            return (
              <QuestionSliderView
                item={item}
                translateY={translateY}
                index={index}
              />
            );
          }}
          keyExtractor={item => item.uniqueId}
          snapToAlignment="start"
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
      )}
      <SliderHeader tab={tab} onTabChange={setTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05071B',
  },
  loader: {
    marginTop: 200,
  },
});
