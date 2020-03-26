import React from 'react';
import { Text } from 'react-native';
import { string, bool } from 'prop-types';
import styles from './Header.styles';

const Header = ({ text, isPrimary }) => (
  <Text
    testID="Header"
    style={[styles.header, isPrimary && styles.headerPrimary]}>
    {text}
  </Text>
);

Header.propTypes = {
  text: string.isRequired,
  isPrimary: bool,
};

Header.defaultProps = {
  isPrimary: true,
};

export default Header;
