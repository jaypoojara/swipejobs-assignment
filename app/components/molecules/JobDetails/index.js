import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import colors from '../../../themes/colors';
import fonts from '../../../themes/fonts';
import T from '../../atoms/T';
import ButtonComponent from '../../atoms/Button';

const index = ({ item }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderRadius: 8,
          margin: 20
        }}
      >
        <ScrollView style={styles.border}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.image}
              source={{
                uri: item.jobTitle.imageUrl
              }}
            />
            <View style={styles.companyContainer}>
              <T style={styles.jobTitleText} text={item.jobTitle.name} />
              <T style={styles.companyNameText} text={item.company.name} />
            </View>
            <View style={styles.distanceContainer}>
              <View>
                <T style={styles.distanceText} id="distance" />
                <T
                  style={styles.milesText}
                  text={`${item.milesToTravel} miles`}
                />
              </View>
              <View>
                <T style={styles.hourlyRateText} id="hourly_text" />
                <View style={styles.dollarContainer}>
                  <T style={styles.dollarText} text="$ "></T>
                  <T
                    style={styles.priceText}
                    text={`${item.wagePerHourInCents / 100}`}
                  ></T>
                </View>
              </View>
            </View>
            <View style={styles.detailContainer}>
              <View>
                <FontAwesome5 name="calendar-alt" size={24} color="black" />
              </View>
              <View style={styles.ML}>
                <T id="shift_text" style={styles.detailText} />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
                <T
                  style={styles.slotText}
                  text="APR 7, WED 8:00 AM - 10:00PM PDT"
                />
              </View>
            </View>

            <View style={styles.detailContainer}>
              <View>
                <FontAwesome5 name="location-arrow" size={24} color="black" />
              </View>
              <View style={styles.ML}>
                <T id="location" style={styles.detailText} />
                <T
                  style={styles.extraLarge}
                  text={`${item.company.address.formattedAddress}`}
                />
                <T
                  text={`${item.milesToTravel} miles from your job search location`}
                  style={styles.helperText}
                />
              </View>
              <View style={styles.ML10}>
                <FontAwesome5 name="chevron-right" size={24} color="black" />
              </View>
            </View>
            {item.requirements && item.requirements?.length > 0 && (
              <View style={styles.detailContainer}>
                <View>
                  <FontAwesome5 name="hammer" size={24} color="black" />
                </View>
                <View style={{ marginLeft: 15 }}>
                  <T id="requirement" style={styles.detailText} />
                  {item.requirements.map(data => (
                    <T style={styles.extraLarge} text={`- ${data}`} />
                  ))}
                  {/* <T style={styles.extraLarge} text="- Hard Hat" /> */}
                </View>
              </View>
            )}

            <View style={styles.detailContainer}>
              <View>
                <FontAwesome5 name="user-circle" size={24} color="black" />
              </View>
              <View style={{ marginLeft: 15 }}>
                <T id="report_to" style={styles.detailText} />
                <T
                  style={styles.extraLarge}
                  text={`${item.company.reportTo.name} ${item.company.reportTo.phone}`}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            mode="outlined"
            color={colors.off_white}
            textColor={colors.off_white}
            onPress={() => console.log('No thanks clicked')}
            messageId="no_thanks"
          />
          <ButtonComponent
            mode="contained"
            color={colors.black}
            textColor={colors.white}
            onPress={() => console.log('i will clicked')}
            messageId="take_it"
          />
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    height: '85%',
    backgroundColor: '#eeeeee'
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
