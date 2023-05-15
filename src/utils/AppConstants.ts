import {Platform} from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export const ScreenNames = {
  MainStack: {
    BOTTOM_TABS: 'BottomTabs',
  },
};

export const TabNames = {
  HOME: 'Home',
  DISCOVER: 'Discover',
  ACTIVITY: 'Activity',
  BOOKMARKS: 'Bookmarks',
  PROFILE: 'Profile',
};

export const Colors = {
  bottomBar: '#011E29',
  primary: {
    1000: '#0B56D5',
    900: '#0D63F3',
    800: '#2B77F5',
    700: '#4A8AF6',
    600: '#689EF8',
    500: '#86B1F9',
    400: '#A4C5FB',
    300: '#C3D8FC',
    200: '#E1ECFE',
    100: '#F9FAFE',
  },
  grayscale: {
    1000: '#16172E',
    900: '#1D3145',
    800: '#2C4A67',
    700: '#3B6289',
    600: '#4A7BAC',
    500: '#6893BE',
    400: '#8AACCD',
    300: '#ACC4DC',
    200: '#CFDDEA',
    100: '#F1F5F9',
    0: '#FFFFFF',
  },
  additional: {
    red: {
      100: '#D50B24',
      70: '#F54157',
      20: '#FCC9CF',
    },
    green: {
      100: '#0BD58A',
      70: '#92F9D3',
      20: '#C9FCE9',
    },
    orange: {
      100: '#F5BE51',
      70: '#F9D897',
      20: '#FDF2DC',
    },
  },
};

export const Sizes = {
  small: 8,
  normal: 10,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 47,

  fonts: {
    h1: 20,
    h2: 16,
    h3: 14,
  },

  safeAreaInsetsTop: StaticSafeAreaInsets.safeAreaInsetsTop,
  safeAreaInsetsBottom: StaticSafeAreaInsets.safeAreaInsetsBottom,
  safeAreaInsetsLeft: StaticSafeAreaInsets.safeAreaInsetsLeft,
  safeAreaInsetsRight: StaticSafeAreaInsets.safeAreaInsetsRight,

  header: {
    height: Platform.select({
      ios: 40 + StaticSafeAreaInsets.safeAreaInsetsTop,
      android: 56,
    }),
  },
  tabs: {
    height: Platform.select({
      ios: 50 + StaticSafeAreaInsets.safeAreaInsetsBottom,
      android: 56,
    }),
  },
};
