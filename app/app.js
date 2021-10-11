import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import LanguageProvider from '@atoms/LanguageProvider';
import RootScreen from '@scenes/RootScreen';
import createStore from 'app/rootReducer';
import { translationMessages } from './i18n';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';

const { store, persistor } = createStore();

const App = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <RootScreen />
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </LanguageProvider>
  </Provider>
);

export default App;
