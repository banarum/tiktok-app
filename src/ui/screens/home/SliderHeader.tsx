// Create View Row component with 4 items.
// 1st item is a simple text aligned on the left side of the screen with margin 10 with label "10m" and clock icon on the left
// 2nd item is a search icon aligned on the righ side of the screen with margin 10px.
// Between these two items should be 2 text labels Saying "Following" and "For You" distributed equaly on the screen.

import {AssetImage} from '../../../assets/AssetImage';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as AppConstants from '../../../utils/AppConstants';
import Assets from '../../../assets';

export default ({tab, onTabChange}: any) => {
  // create interval timer
  const [timer, setTimer] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  let timerText = '';

  if (timer < 60) {
    timerText = `${timer}s`;
  } else {
    timerText = `${Math.floor(timer / 60)}m`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <AssetImage asset={Assets.timerIcon} height={20} />
        <Text style={styles.timerText}>{timerText}</Text>
      </View>
      <View style={styles.centerContainer}>
        <TouchableOpacity
          style={styles.tabFollowingContainer}
          onPress={() => onTabChange(1)}>
          <Text style={tab === 1 ? styles.tabSelectedText : styles.tabText}>
            Following
          </Text>
          <View
            style={
              tab === 1
                ? styles.tabSelectedUnderline
                : styles.tabUnselectedUnderline
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabForYouContainer}
          onPress={() => onTabChange(2)}>
          <Text style={tab === 2 ? styles.tabSelectedText : styles.tabText}>
            For You
          </Text>
          <View
            style={
              tab === 2
                ? styles.tabSelectedUnderline
                : styles.tabUnselectedUnderline
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <AssetImage asset={Assets.searchIcon} height={22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: AppConstants.Sizes.safeAreaInsetsTop + 20,
    position: 'absolute',
  },

  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
  },

  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    position: 'absolute',
  },

  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: 16,
    position: 'absolute',
  },
  timerText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 4,
    fontFamily: 'SF Pro Rounded',
  },
  tabFollowingContainer: {
    marginRight: 11,
    flexDirection: 'column',
    width: 90,
    alignItems: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 18,
    //fontFamily: 'SF-Pro-Rounded',
    fontWeight: 'normal',
    fontFamily: 'SF Pro Rounded',
  },
  tabSelectedText: {
    color: '#fff',
    fontSize: 18,
    //fontFamily: 'SF-Pro-Rounded',
    fontWeight: 'bold',
    fontFamily: 'SF Pro Rounded',
  },
  tabForYouContainer: {
    marginLeft: 11,
    width: 70,
    alignItems: 'center',
  },
  tabSelectedUnderline: {
    width: 30,
    height: 4,
    backgroundColor: '#fff',
    marginTop: 4,
  },
  tabUnselectedUnderline: {
    width: 0,
    height: 4,
    backgroundColor: '#fff00',
    marginTop: 4,
  },
});
