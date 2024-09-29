import React from 'react';
import {StatusBar} from 'react-native';

import AppNavigator from './src/routes/AppNavigator';
import {PaperProvider} from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <>
      <PaperProvider>
        <StatusBar />
        <AppNavigator />
      </PaperProvider>
    </>
  );
}

export default App;
