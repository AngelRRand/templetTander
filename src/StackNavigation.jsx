import Home from './view/Home.jsx';
import Chat from './view/Chat.jsx';
import Login from './view/Login.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const StackNavigation = () => {
    let user = true
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default StackNavigation