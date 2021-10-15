import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import ThemeProvider from './providers/themeProvider';
import Wrapper from './views';

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
