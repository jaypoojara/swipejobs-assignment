import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import FlashMessage from 'react-native-flash-message';
import LanguageProvider from '@atoms/LanguageProvider';
import RootScreen from '@scenes/RootScreen';
import createStore from 'app/rootReducer';
import { translationMessages } from './i18n';
import 'react-native-gesture-handler';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context/src/SafeAreaContext';

const { store, persistor } = createStore();

const App = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <SafeAreaProvider>
            <StatusBar />
            <RootScreen />
            <FlashMessage
              autoHide={true}
              position="top"
              icon="auto"
              duration={5000}
            />
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </LanguageProvider>
  </Provider>
);

export default App;
