// create an empty screen compoenent use safe area but only for top
//
import React from 'react';
import {Text, SafeAreaView} from 'react-native';

export default () => {
  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center', marginTop: 200, fontSize: 21}}>
        Coming Soon
      </Text>
    </SafeAreaView>
  );
};
