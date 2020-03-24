import { StyleSheet } from 'react-native';
import { colors } from 'constants';
export default StyleSheet.create({
  listItem: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 10,
  },
  listItemContainer: {
    paddingVertical: 21,
    paddingLeft: 21,
    paddingRight: 12,
  },
  dateAndTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temperatureContainer: {
    paddingTop: 8,
  },
  decriptionContainer: {
    width: 'auto',
    marginTop: 11,
    borderRadius: 11,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: colors.descriptionColor,
    alignSelf: 'flex-start',
  },
});
