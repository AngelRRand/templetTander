import { Axios } from "axios";
import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";

const AppbaseState = ({ children }) => {


    const initialState = {
        userMail: 'ORASIO@HOTMAIL.COM',
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)


    const getInfoUser = () => {
        
        let rest = Axios.get('http://backend.plataformapuma.com:44444/authenticatev2.ashx?loginid=contacto@ludelaba.com.ar&password=ariel')
        console.log(rest)
        return rest
    }


    return (
        <AppContext.Provider
            value={{
                userMail: state.userMail,
                getInfoUser
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppbaseState