import React from 'react';
import { View, Text } from 'react-native';
import { textStyles } from 'constants';
import { string } from 'prop-types';
import styles from './ListElement.styles';

const ListElement = ({
  date,
  temperature,
  time,
  feelsLikeTemperature,
  description,
}) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemContainer}>
        <View style={styles.dateAndTimeContainer}>
          <Text style={textStyles.dateAndTime}>{date}</Text>
          <Text style={textStyles.dateAndTime}>{time}</Text>
        </View>
        <View style={styles.temperatureContainer}>
          <Text style={textStyles.temperature}>temperature: {temperature}</Text>
          <Text style={textStyles.temperature}>
            feels like temperature: {feelsLikeTemperature}
          </Text>
        </View>
        <View style={styles.decriptionContainer}>
          <Text style={textStyles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

ListElement.propTypes = {
  date: string.isRequired,
  time: string.isRequired,
  temperature: string.isRequired,
  feelsLikeTemperature: string.isRequired,
  description: string.isRequired,
};

export default ListElement;
