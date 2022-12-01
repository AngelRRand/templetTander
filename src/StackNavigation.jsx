import Home from './view/Home.jsx';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
    )
}

export default StackNavigation