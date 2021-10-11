import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import colors from '../../../themes/colors';
import images from '../../../themes/images';
import T from '../T';

const Header = ({ name }) => {
  return (
    <Appbar.Header style={{ backgroundColor: colors.black }}>
      <View style={styles.headerContainer}>
        <Image
          source={images.swipeLogo}
          resizeMode="contain"
          style={styles.headerLogo}
        />
        <TouchableOpacity>
          <T style={[styles.titleText]} text={name} />
        </TouchableOpacity>
      </View>
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
  }
});
