import { View, Text, Button, Platform, PermissionsAndroid, } from 'react-native';
import React, { useContext, useEffect } from 'react'
import AppContext from '../context/app/AppContext';

const GetJson = () => {
    const { dataUser, getJsonUser } = useContext(AppContext)
    console.log(dataUser)
    

    return (
        <View>
            <Text>GetJson</Text>
            <Button title='GETJSON' onPress={() => getJsonUser()} />

        </View>
    )
}

export default GetJson