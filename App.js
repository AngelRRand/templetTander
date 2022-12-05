import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/view/Home.jsx';
import Chat from './src/view/Chat.jsx';
import StackNavigation from './src/StackNavigation.jsx';

const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
    
  );
}

export default App;