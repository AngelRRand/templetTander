import { Button } from 'react-native';
import React, { useContext, useEffect } from 'react'
import AppContext from '../context/app/AppContext';

const GetJson = () => {
    const { dataUser, getJsonUser, userMail } = useContext(AppContext)
    console.log(dataUser)

    
    return (
        <Button title='GETJSON' onPress={() => getJsonUser()} />
    )
}

export default GetJson