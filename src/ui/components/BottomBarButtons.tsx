import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Assets from '../../assets';
import {AssetImage} from '../../assets/AssetImage';
import {Colors, TabNames} from '../../utils/AppConstants';

export const TabButton = ({type, name, focused}: any) => {
  const selectAsset = () => {
    switch (type) {
      case TabNames.HOME:
        return Assets.homeTabIcon;
      case TabNames.ACTIVITY:
        return Assets.activityTabIcon;
      case TabNames.BOOKMARKS:
        return Assets.bookmarksTabIcon;
      case TabNames.PROFILE:
        return Assets.profileTabIcon;
      case TabNames.DISCOVER:
        return Assets.discoverTabIcon;
      //break;
    }
  };
  const selectColor = () => {
    return focused ? 'white' : '#FFFFFF66';
  };

  return (
    <View style={styles.tabButton}>
      <AssetImage
        asset={selectAsset()}
        height={18}
        fillOpacity={focused ? 1 : 0.4}
      />
      <Text style={[styles.tabLabel, {color: selectColor()}]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    // flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingTop: 2,
    flexDirection: 'column',
  },
  tabLabel: {
    marginTop: 4,
    width: 70,
    fontSize: 10,
    textAlign: 'center',
    paddingLeft: 0,
  },
  primaryRed: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: 44,
    width: 44,
    borderRadius: 15,
    backgroundColor: Colors.primary[900],
    elevation: 1,
  },
  invisibleArea: {
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    height: '100%',
  },

  text: {
    fontSize: 13,
  },
});
