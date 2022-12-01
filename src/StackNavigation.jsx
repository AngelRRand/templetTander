import Home from './view/Home.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './view/Chat.jsx';


const StackNavigation = () => {
    
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    )
}

export default StackNavigation