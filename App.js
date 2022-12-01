import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/view/Home';
import StackNavigation from './src/StackNavigation';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNavigation>
        
      </StackNavigation>
    </NavigationContainer>
        
  );
}

export default App;