import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { TouchableOpacity } from 'react-native';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
console.disableYellowBox = true;

jest.mock('@expo/vector-icons', () => {
  // eslint-disable-next-line global-require
  const { TouchableOpacity } = require('react-native');

  return {
    SimpleLineIcons: TouchableOpacity,
    Ionicons: TouchableOpacity,
    MaterialCommunityIcons: TouchableOpacity,
    Entypo: TouchableOpacity,
    MaterialIcons: TouchableOpacity,
    FontAwesome: TouchableOpacity,
    AntDesign: TouchableOpacity,
    FontAwesome5: TouchableOpacity
  };
});

// jest.mock('react-native-pager-view', () => {});
