import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/StackNavigation.jsx';
import AppbaseState from './src/context/app/AppState.jsx';


function App() {
  return (

    <AppbaseState>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AppbaseState>

  );
}

export default App;