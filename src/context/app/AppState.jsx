import axios from "axios";
import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";


import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from "@react-native-async-storage/async-storage";


const AppbaseState = ({ children }) => {


    const initialState = {
        userMail: 'ORASIO@HOTMAIL.COM',
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)


    const asyncUser = async () => {
        let respons = await axios.get('http://backend.plataformapuma.com:44444/authenticatev2.ashx?loginid=contacto@ludelaba.com.ar&password=ariel')
        let zips = await axios.get('http://backend.plataformapuma.com:44444/synczipv2.ashx?loginid=contacto@ludelaba.com.ar')
        let user = respons.data.content.raw.Usuario.LoginId
        let dataZip = zips.data.content.raw.dataZip
        let dirs = RNFetchBlob.fs.dirs
        //console.log(dirs)


        RNFetchBlob
            .config({
                fileCache: true,
            })
            .fetch('GET', `http://backend.plataformapuma.com:44444/syncdownzip.ashx?loginid=${user}&zipname=${dataZip}`)
            .then((res) => {
                unzipDownloadFile(res.path(dirs.DocumentDir + '/zip'), (jsonFilePath) => {
                    storeJSONtoAsyncStorage(jsonFilePath);
                });
            });

        function unzipDownloadFile(target, cb) {
            const targetPath = target;
            const sourcePath = `${target}.json`;
            const charset = 'UTF-8';

            unzip(sourcePath, targetPath, charset)
                .then((path) => {
                    console.log(`unzip completed at ${path}`)
                    return cb(path);
                })
                .catch((error) => {
                    console.error(error)
                });
        }

        function storeJSONtoAsyncStorage(path) {
            RNFetchBlob.fs.readFile(path, 'utf-8')
                .then((data) => {
                    AsyncStorage.setItem('myJSON', data);
                });
        }

    }

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
                asyncUser,
                verData
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppbaseState