import { StyleSheet } from 'react-native';
import { colors, textStyles } from 'constants';
export default StyleSheet.create({
  listHeader: {
    alignItems: 'center',
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  h2: { paddingTop: 15 },
  textInputLabel: {
    paddingTop: 30,
    paddingBottom: 15,
  },
  textInput: {
    width: 235,
    height: 45,
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 5,
    ...textStyles.textInput,
    textAlign: 'center',
  },
});
