import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons';
import colors from '../../../themes/colors';
import fonts from '../../../themes/fonts';
import T from '../../atoms/T';
import styled from 'styled-components/native';

const StyledContainer = styled.View`
  border-radius: 8px;
`;

const index = ({ item }) => {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <StyledContainer style={{ backgroundColor: colors.white, flex: 1 }}>
        <Image
          style={{ height: '30%' }}
          source={{
            uri: 'https://imgs.swipejobs.com/js/job-category/construction-1.jpg'
          }}
        />
        <View style={{ marginHorizontal: 10 }}>
          <T
            style={[{ fontSize: 20, fontWeight: 'bold' }]}
            text={item.jobTitle.name}
          />
          <T
            style={[{ fontSize: 16, fontWeight: '700', marginVertical: 5 }]}
            text={item.company.name}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            backgroundColor: colors.banner,
            paddingVertical: 10
          }}
        >
          <View>
            <T style={[{ ...fonts.style.largeBold }]} text="Distance" />
            <T
              style={[
                { ...fonts.style.extraOverSizeBold, color: colors.white }
              ]}
              text="5.6 miles"
            />
          </View>
          <View>
            <T style={[{ ...fonts.style.largeBold }]} text="Hourly Rate" />
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <T
                style={{
                  ...fonts.style.overSizeBold,
                  color: colors.white,
                  textAlign: 'right',
                  lineHeight: 30
                }}
                text="$ "
              ></T>
              <T
                style={{
                  ...fonts.style.extraOverSizeBold,
                  color: colors.white,
                  textAlign: 'right'
                }}
                text="13.50"
              ></T>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            paddingVertical: 10,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View>
            <FontAwesome5 name="calendar-alt" size={24} color="black" />
          </View>
          <View style={{ marginLeft: 15 }}>
            <T text="Shift Dates" style={[{ ...fonts.style.extraLargeBold }]} />
            <T
              style={[{ fontSize: fonts.size.extraLarge, color: colors.black }]}
              text="APR 7, WED 8:00 AM - 10:00PM PDT"
            />
            <T
              style={[{ fontSize: fonts.size.extraLarge, color: colors.black }]}
              text="APR 7, WED 8:00 AM - 10:00PM PDT"
            />
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            paddingVertical: 10,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View>
            <Entypo name="location-pin" size={24} color="black" />
          </View>
          <View style={{ marginLeft: 15 }}>
            <T
              text="Location"
              style={[{ ...fonts.style.extraLargeBold, color: colors.black }]}
            />
            <T
              style={[{ fontSize: fonts.size.extraLarge, color: colors.black }]}
              text="430 Smith St, Chicago, IL 60654, USA"
            />
            <T
              text="5.62 miles from your job search location"
              style={[{ fontSize: fonts.size.large, color: colors.black }]}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            paddingVertical: 10,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="hammer-screwdriver"
              size={24}
              color="black"
            />
          </View>
          <View style={{ marginLeft: 15 }}>
            <T
              text="Requirements"
              style={[{ ...fonts.style.extraLargeBold, color: colors.black }]}
            />
            <T
              style={[{ fontSize: fonts.size.extraLarge, color: colors.black }]}
              text="- Safety Vest"
            />
            <T
              style={[{ fontSize: fonts.size.extraLarge, color: colors.black }]}
              text="- Hard Hat"
            />
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            paddingVertical: 10,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={{ marginLeft: 15 }}>
            <T
              text="Report To"
              style={[{ ...fonts.style.extraLargeBold, color: colors.black }]}
            />
            <T
              style={[{ fontSize: fonts.size.extraLarge, color: colors.black }]}
              text="Dave (123) 546 987"
            />
          </View>
        </View>
      </StyledContainer>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
