import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import ThemeProvider from './src/providers/themeProvider';
import Wrapper from './src/views';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Wrapper/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
