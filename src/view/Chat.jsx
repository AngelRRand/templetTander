import React, { useContext, useEffect } from 'react'
import { View, Text, Button, Platform, PermissionsAndroid, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../context/app/AppContext';
import RNFetchBlob from 'rn-fetch-blob';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Chat = () => {
  const navigation = useNavigation()
  const { getUrlNames, urlsZips, userMail, zipsNames } = useContext(AppContext)


  useEffect(() => {
    getUrlNames(userMail, zipsNames)
  }, [])

  //console.log(urlsZips, 'DESDE CHAT')

  const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      downloadFile(urlsZips.dataZip);
      downloadFile(urlsZips.imagesZip);

    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {

          //DESCARGA LOS ZIP
          downloadFile(urlsZips.dataZip);
          downloadFile(urlsZips.imagesZip);
          console.log('Storage Permission Granted.');
        } else {
          Alert.alert('Error', 'Storage Permission Not Granted');
        }
      } catch (err) {
        console.log("+++" + err);
      }
    }
  };

  const downloadFile = (fileUrl) => {

    let FILE_URL = fileUrl;
    let file_ext = getFileExtention(FILE_URL);
    file_ext = '.' + file_ext[0];
    const { config, fs } = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;

    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path: RootDir + '/file_' + userMail + file_ext,
        description: 'downloading file...',
        notification: true,
        useDownloadManager: true,
      },
    };
    config(options)

      .fetch('GET', FILE_URL)
      .then(res => {
        console.log(res, 'RES')

        unzipDownloadFile(options.addAndroidDownloads.path, (jsonFilePath) => {
          storeJSONtoAsyncStorage(jsonFilePath);
        });

        alert('HOLA :D');
      });
  };

  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ?
      /[^.]+$/.exec(fileUrl) : undefined;
  };

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
        console.error(error, 'asd')
      });
  }

  function storeJSONtoAsyncStorage(path) {
    RNFetchBlob.fs.readFile(path, 'utf-8')
      .then((data) => {
        AsyncStorage.setItem('myJSON', data);
      });
  }

  return (
    <View>
      {
        urlsZips === '' ? (
          <Text>Cargando...</Text>
        ) : (
          <>
            <Text>CHAT</Text>
            <Button title='To go Chat' onPress={() => navigation.navigate('Home')} />
            <Button title='DOWLOAD' onPress={() => checkPermission()} />
          </>
        )
      }

    </View>
  )
}

export default Chat