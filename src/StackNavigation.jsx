import Home from './view/Home.jsx';
import Chat from './view/Chat.jsx';
import Login from './view/Login.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useLogin from './context/Context.jsx';


const StackNavigation = () => {
    const {user} = useLogin()

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            {
                user !== null ? 
                    <>
    
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Chat" component={Chat} />
                    </>

                :
                    <Stack.Screen name="Login" component={Login} />
                
            }

        </Stack.Navigator>
    )
}

export default StackNavigation