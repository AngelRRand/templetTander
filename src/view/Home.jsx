import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import AppContext from '../context/app/AppContext';
const Home = () => {
  const navigation = useNavigation()


  

  const { getMailUser, getZipUser, userMail, zipsNames } = useContext(AppContext)
  useEffect(() => {
    getMailUser()
  }, [])

  useEffect(() => {
    if(userMail === ''){
      return
    } else{
      getZipUser()
    }
  }, [userMail])


console.log(userMail)
console.log(zipsNames)




/*
  async function loadData() {
    try {
      const users = await firestore().collection('Usuarios').get()
      setData(users.docs)
    } catch (error) {
      console.log(error)
    }
  }



  function renderItem({item}) {
    return (
      <View>
        <Text>{item.data().nombre}</Text>

      </View>
    )
  }
  */

  return (
    <View>
      <Text>HOME</Text>
      <Text>{userMail}</Text>


      <Button title='To go Chat' onPress={() => navigation.navigate('Chat')} />
      

    </View>
  )
}

export default Home