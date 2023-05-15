// create an empty screen compoenent use safe area but only for top
//
import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Coming Soon</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Rounded',
    alignSelf: 'center',
    marginTop: 200,
    fontSize: 21,
  },
});
