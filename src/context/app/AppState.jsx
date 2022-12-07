import { useReducer } from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'
import { GET_USER_EMAIL, GET_ZIPS_NAMES, GET_ZIP_URL } from "../types";


const AppbaseState = ({ children }) => {


    const initialState = {
        userMail: '',




        //SYNC
        fileUrl: '',
        zipsNames: '',
        urlsZips: {}
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)



    const getMailUser = async () => {
        try {
            let respons = await axios.get('http://backend.plataformapuma.com:44444/authenticatev2.ashx?loginid=contacto@ludelaba.com.ar&password=ariel')
            let userMail = respons.data.content.raw.Usuario.LoginId
            dispatch({
                type: GET_USER_EMAIL,
                payload: userMail
            })
        } catch (error) {
            console.log(first)
        }
    }



    const getZipUser = async (userMail) => {
        try {
            let zips = await axios.get(`http://backend.plataformapuma.com:44444/synczipv2.ashx?loginid=${userMail}`)
            let dataZip = await zips.data.content.raw.dataZip
            let imagesZip = await zips.data.content.raw.imagesZip

            let zipsNames = {
                dataZip: dataZip,
                imagesZip: imagesZip
            }
            dispatch({
                type: GET_ZIPS_NAMES,
                payload: zipsNames
            })
        } catch (error) {
            console.log(error)
        }
    }



    const getUrlNames = async (userMail, zipsNames) => {
        try {
            const urlsZips = {
                dataZip: `http://backend.plataformapuma.com:44444/syncdownzip.ashx?loginid=${userMail}&zipname=${zipsNames.dataZip}`,
                imagesZip: `http://backend.plataformapuma.com:44444/syncdownzip.ashx?loginid=${userMail}&zipname=${zipsNames.imagesZip}`
            }
            dispatch({
                type: GET_ZIP_URL,
                payload: urlsZips
            })
        } catch (error) {
            console.log(error)
        }
    };




    const ViewData = () => {
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
                zipsNames: state.zipsNames,
                urlsZips: state.urlsZips,
                getMailUser,
                getZipUser,
                getUrlNames
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppbaseState