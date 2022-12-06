import React, { useContext, useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../context/app/AppContext';

const Chat = () => {
  const navigation = useNavigation()
  const { verData } = useContext(AppContext)
  useEffect(() => {
    verData()
  }, [])

  return (
    <View>
      <Text>CHAT</Text>
      <Button title='To go Chat' onPress={() => navigation.navigate('Home')} />

    </View>
  )
}

export default Chat