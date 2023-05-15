import React from 'react';
import {Image} from 'react-native';

type AvatarProps = {
  width?: number;
  height?: number;
  url: string;
  borderRadius?: number;
};

export default ({
  width = 40,
  height = 40,
  borderRadius = 50,
  url,
}: AvatarProps) => {
  console.log('Avatar', url);
  return (
    <Image
      source={{uri: url}}
      style={{width: width, height: height, borderRadius: borderRadius, flex: 1}}
    />
  );
};
