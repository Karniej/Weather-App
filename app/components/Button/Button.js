import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { func } from 'prop-types';
import { textStyles } from 'constants';
import styles from './Button.styles';

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={textStyles.buttonText}>Have a look</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: func,
};
export default Button;
