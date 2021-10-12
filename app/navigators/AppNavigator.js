import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import JobMatchScreen from '@scenes/JobMatchScreen';
import SplashScreen from '@scenes/SplashScreen';
import ProfileScreen from '@scenes/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from '../services/NavigationService';
const Stack = createStackNavigator();
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
export default function AppNavigator() {
  return (
    <NavigationContainer ref={NavigationService.setTopLevelNavigator}>
      <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="JobMatchScreen" component={JobMatchScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
