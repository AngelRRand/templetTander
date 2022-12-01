import Home from './view/Home.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './view/Chat.jsx';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    return (
        <Stack.Navigator
            inicialRouteName='Home'
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    )
}

export default StackNavigation