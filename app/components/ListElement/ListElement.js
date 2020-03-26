import React from 'react';
import { View, Text } from 'react-native';
import { textStyles } from 'constants';
import { string, shape, number, arrayOf } from 'prop-types';
import styles from './ListElement.styles';

const ListElement = ({ dt_txt, main: { temp, feels_like }, weather }) => {
  const dateAndTime = dt_txt.split(' ');
  const day = dateAndTime[0];
  const time = dateAndTime[1];
  const { description } = weather[0];
  return (
    <View testID="ListElement" style={styles.listItem}>
      <View style={styles.listItemContainer}>
        <View style={styles.dateAndTimeContainer}>
          <Text style={textStyles.dateAndTime}>{day}</Text>
          <Text style={textStyles.dateAndTime}>{time}</Text>
        </View>
        <View style={styles.temperatureContainer}>
          <Text style={textStyles.temperature}>temperature: {temp}K</Text>
          <Text style={textStyles.temperature}>
            feels like temperature: {feels_like}K
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
  dt_txt: string.isRequired,
  main: shape({
    temp: number.isRequired,
    feels_like: number.isRequired,
  }),
  weather: arrayOf(
    shape({
      description: string.isRequired,
    }),
  ),
};

export default ListElement;
