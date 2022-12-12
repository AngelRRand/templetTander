import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import AppContext from '../context/app/AppContext';
const Home = () => {
  const navigation = useNavigation()




  const { getMailUser, getZipUser, userMail, zipsNames } = useContext(AppContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getMailUser()
  }, [])

  useEffect(() => {
    if (userMail === '') {
      return
    } else {
      getZipUser(userMail)
      if(zipsNames !== ''){
        setLoading(false)
      }
    }
  }, [userMail, zipsNames])


  console.log(userMail)
  //console.log(zipsNames, 'VEAMOSS')




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
      {
        loading === true ? (
          <Text>Cargando...</Text>
        ) : (
          <>
          <Text>HOME</Text>
          <Text>{userMail}</Text>
          <Button title='To go Chaaat' onPress={() => navigation.navigate('Chat')} />
          
          </>
        )
      }


    </View>
  )
}

export default Home