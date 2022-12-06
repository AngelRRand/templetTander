import axios from "axios";
import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";


import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorager from "@react-native-async-storage/async-storage";


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
        console.log(dirs)
        /*

        RNFetchBlob
            .config({
                // add this option that makes response data to be stored as a file,
                // this is much more performant.
                fileCache: true,
            })
            .fetch('GET', `http://backend.plataformapuma.com:44444/syncdownzip.ashx?loginid=${user}&zipname=${dataZip}`)
            .then((res) => {
                console.log('The file saved to ', res.path(dirs.DocumentDir + '/zip'))

                // Unzip will be called here!
                unzipDownloadFile(res.path(dirs.DocumentDir + '/zip'), (jsonFilePath) => {

                    // Let's store this json.
                    storeJSONtoAsyncStorage(jsonFilePath);

                    // Done!
                    // Now you can read the AsyncStorage everytime you need (using function bellow).
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

              function storeJSONtoAsyncStorage (path) {
                RNFetchBlob.fs.readFile(path, 'utf-8')
                .then((data) => {
                  AsyncStorage.setItem('myJSON', data);
                });
              }

        */

    }


    return (
        <AppContext.Provider
            value={{
                userMail: state.userMail,
                asyncUser
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppbaseState