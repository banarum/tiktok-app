import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Asset} from '.';

type Props = {
  asset: Asset;
  width?: number;
  height?: number;
  fill?: string;
  fillOpacity?: number;
  stroke?: string;
  containerStyle?: any;
  imageStyle?: any;
};

export const AssetImage = ({
  asset,
  width,
  height,
  fill = 'none',
  fillOpacity,
  stroke,
  containerStyle,
  imageStyle,
}: Props) => {
  switch (asset.type) {
    case 'vector':
      return (
        <View style={[styles.container, containerStyle]}>
          <asset.path
            width={width ?? height}
            height={height ?? width}
            fill={fill}
            fillOpacity={fillOpacity}
            stroke={stroke}
          />
        </View>
      );

    case 'bitmap':
      return (
        <View style={[styles.container, containerStyle]}>
          <Image
            style={[styles.imageStyle, imageStyle]}
            width={width ?? height}
            height={height ?? width}
            source={asset.path}
          />
        </View>
      );
  }
  // }
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.GREEN,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});
