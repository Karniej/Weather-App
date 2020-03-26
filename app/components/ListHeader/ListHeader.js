import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { func } from 'prop-types';
import { Header, Button } from 'components';
import { textStyles, colors } from 'constants';
import styles from './ListHeader.styles';

const ListHeader = ({ onPress, onChangeText, onSubmitEditing }) => {
  return (
    <View testID="ListHeader" style={styles.listHeader}>
      <Header text="Hello Sunshine!" />
      <View style={styles.h2}>
        <Header
          isPrimary={false}
          text="Can you please tell me the weather in Germany?"
        />
      </View>
      <Text style={[textStyles.textInput, styles.textInputLabel]}>
        Please enter a city
      </Text>
      <TextInput
        onChangeText={onChangeText}
        style={styles.textInput}
        placeholderTextColor={colors.textColor}
        onSubmitEditing={onSubmitEditing}
      />
      <Button testID="Button" onPress={onPress} />
    </View>
  );
};

ListHeader.propTypes = {
  onPress: func.isRequired,
  onChangeText: func.isRequired,
  onSubmitEditing: func.isRequired,
};

export default ListHeader;
