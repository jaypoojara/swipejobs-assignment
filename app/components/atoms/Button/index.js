import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import colors from '../../../themes/colors';
import T from '../T';

const index = ({
  mode = 'contained',
  color = colors.black,
  textColor = colors.white,
  messageId,
  onPress
}) => {
  return (
    <Button
      mode={mode}
      color={color}
      uppercase={false}
      style={styles.buttonContainer}
      contentStyle={styles.buttonHeight}
      onPress={onPress}
    >
      <T id={messageId} style={{ color: textColor }} />
    </Button>
  );
};

export default index;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '45%'
  },
  buttonHeight: {
    height: 50
  }
});
