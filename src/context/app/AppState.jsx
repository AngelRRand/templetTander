import { useReducer } from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'
import { GET_URLZIP } from "../types";


const AppbaseState = ({ children }) => {


    const initialState = {
        userMail: 'ORASIO@HOTMAIL.COM',
        fileUrl: ''
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)


    const asyncUser = async () => {
        let respons = await axios.get('http://backend.plataformapuma.com:44444/authenticatev2.ashx?loginid=contacto@ludelaba.com.ar&password=ariel')
        let zips = await axios.get('http://backend.plataformapuma.com:44444/synczipv2.ashx?loginid=contacto@ludelaba.com.ar')
        let user = respons.data.content.raw.Usuario.LoginId
        let dataZip = zips.data.content.raw.dataZip
        const fileURL = await `http://backend.plataformapuma.com:44444/syncdownzip.ashx?loginid=${user}&zipname=${dataZip}`
        dispatch({
            type: GET_URLZIP,
            payload: fileURL
        })
      };










    const verData = () => {
        AsyncStorage.getItem('myJSON', (err, json) => {
            if (err) {
                console.log(err);
            } else {
                const myJSON = JSON.parse(json);
                console.log(myJSON)
            }
        })

    }

    return (
        <AppContext.Provider
            value={{
                userMail: state.userMail,
                fileUrl:state.fileUrl,
                asyncUser,
                verData
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppbaseState