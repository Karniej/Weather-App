import { StyleSheet } from 'react-native';
import { colors, responsive } from 'constants';

export default StyleSheet.create({
  listItem: {
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 44,
    width: responsive.responsiveWidth(90),
  },
  listItemContainer: {
    paddingVertical: 21,
    paddingLeft: 21,
    paddingRight: 12,
    width: '100%',
  },
  dateAndTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temperatureContainer: {
    paddingTop: 8,
  },
  decriptionContainer: {
    marginTop: 11,
    borderRadius: 11,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: colors.descriptionColor,
    alignSelf: 'flex-start',
  },
});
