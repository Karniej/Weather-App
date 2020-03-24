import { StyleSheet } from 'react-native';
import { colors } from 'constants';

export default StyleSheet.create({
  button: {
    width: 160,
    height: 40,
    borderRadius: 3,
    backgroundColor: colors.primary,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});
