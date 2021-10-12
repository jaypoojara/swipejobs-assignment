import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ReactNativePaperButton } from 'react-native-paper';
import colors from '../../../themes/colors';
import T from '../T';

const Button = ({
  mode = 'contained',
  color = colors.black,
  textColor = colors.white,
  messageId,
  onPress,
  testID
}) => {
  return (
    <ReactNativePaperButton
      testID={testID}
      mode={mode}
      color={color}
      uppercase={false}
      style={styles.buttonContainer}
      contentStyle={styles.buttonHeight}
      onPress={onPress}
    >
      <T id={messageId} style={{ color: textColor }} />
    </ReactNativePaperButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '45%'
  },
  buttonHeight: {
    height: 50
  }
});
