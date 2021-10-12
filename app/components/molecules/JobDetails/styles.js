import { StyleSheet } from 'react-native';
import colors from '../../../themes/colors';
import fonts from '../../../themes/fonts';
export default StyleSheet.create({
  container: {
    height: '85%',
    backgroundColor: colors.backGround
  },
  scrollContainerWrapper: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 8,
    margin: 20
  },
  itemContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 8
  },
  companyContainer: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  jobTitleText: {
    ...fonts.style.overSizeBold
  },
  companyNameText: {
    fontSize: 16,
    marginTop: 10
  },
  distanceContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.banner,
    paddingVertical: 10
  },
  distanceText: {
    ...fonts.style.mediumBold
  },
  milesText: {
    ...fonts.style.extraOverSizeBold,
    color: colors.white,
    marginTop: 5
  },
  hourlyRateText: {
    ...fonts.style.mediumBold,
    textAlign: 'right'
  },
  dollarContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5
  },
  dollarText: {
    ...fonts.style.overSizeBold,
    color: colors.white,
    textAlign: 'right',
    lineHeight: 30
  },
  priceText: {
    ...fonts.style.extraOverSizeBold,
    color: colors.white,
    textAlign: 'right'
  },
  detailContainer: {
    marginHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailText: {
    ...fonts.style.extraLargeBold,
    color: colors.black
  },
  slotText: {
    fontSize: fonts.size.extraLarge,
    color: colors.black
  },
  ML: { marginLeft: 15 },
  extraLarge: {
    fontSize: fonts.size.extraLarge,
    color: colors.black
  },
  helperText: {
    fontSize: fonts.size.large,
    color: colors.black,
    marginTop: 5
  },
  ML10: {
    marginLeft: 10
  },
  border: {
    borderRadius: 8,
    flex: 1
  },
  image: {
    height: 150
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  }
});
