import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from './src/StackNavigation.jsx';
import {Context} from './src/context/Context.jsx';


function App() {
  return (

    <Context>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Context>

  );
}

export default App;