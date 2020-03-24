import colors from './colors';
const textStyles = {
  // Fonts
  Nunito: 'Nunito-Black',
  Roboto: {
    Bold: 'Roboto-Bold',
    Medium: 'Roboto-Medium',
    Regular: 'Roboto-Regular',
  },

  // TextStyles
  textInput: {
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0,
    color: colors.textColor,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    lineHeight: 17,
    color: colors.white,
  },
  dateAndTime: {
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    lineHeight: 16,
    color: colors.primary,
  },
  temperature: {
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 25,
    color: colors.textColor,
  },
  description: {
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
    fontSize: 10,
    lineHeight: 13,
    color: colors.textColor,
  },
};

export default textStyles;
