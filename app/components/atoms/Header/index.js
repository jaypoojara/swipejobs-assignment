import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import NavigationService from '../../../services/NavigationService';
import colors from '../../../themes/colors';
import images from '../../../themes/images';
import T from '../T';

const Header = ({ name, fromProfile = false }) => {
  return (
    <Appbar.Header style={{ backgroundColor: colors.black }}>
      {fromProfile ? (
        <View style={styles.profileHeaderContainer}>
          <TouchableOpacity onPress={() => NavigationService.goBack()}>
            <FontAwesome5 name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <T style={[styles.profileTitle]} text={'Jim Rose'} />
        </View>
      ) : (
        <View style={styles.headerContainer}>
          <Image
            source={images.swipeLogo}
            resizeMode="contain"
            style={styles.headerLogo}
          />
          <TouchableOpacity
            onPress={() => NavigationService.navigate('ProfileScreen')}
          >
            {name && <T style={[styles.titleText]} text={name} />}
          </TouchableOpacity>
        </View>
      )}
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  headerLogo: {
    height: 50,
    width: '50%',
    tintColor: colors.white
  },
  titleText: {
    color: colors.white,
    fontSize: 20
  },
  profileHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  },
  profileTitle: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    marginRight: 10,
    fontSize: 20
  }
});
