import { StyleSheet } from 'react-native';
import { colors, textStyles } from 'constants';
export default StyleSheet.create({
  header: {
    textAlign: 'center',
    fontFamily: textStyles.Nunito,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0,
    color: colors.secondary,
    opacity: 1,
    paddingHorizontal: 14,
  },
  headerPrimary: {
    color: colors.primary,
  },
});
