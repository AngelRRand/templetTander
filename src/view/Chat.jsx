import React from 'react'
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>CHAT</Text>
      <Button title='To go Chat' onPress={()=> navigation.navigate('Home')}/>

    </View>
  )
}

export default Chat