import React from 'react';
import { View, Image } from 'react-native';
import * as images from 'images';
import styles from './Footer.styles';
const Footer = () => {
  return (
    <View testID="Footer" style={styles.footer}>
      <Image source={images.taxiDesign} />
    </View>
  );
};

export default Footer;
