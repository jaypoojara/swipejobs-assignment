import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

export default StyleSheet.create({
  titleText: {
    ...fonts.style.extraLargeBold,
    color: colors.black
  },
  detailText: {
    fontSize: fonts.size.extraLarge,
    color: colors.black
  },
  MT10: {
    marginTop: 10
  },
  M20: {
    margin: 20
  },
  container: {
    flex: 1
  }
});
