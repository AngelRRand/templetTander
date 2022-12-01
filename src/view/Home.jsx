import React from 'react'
import { View, Text, Button } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
        <Text>HOME</Text>
        <Button title='To go Chat' onPress={()=> navigation('Chat')}/>
    </View>
  )
}

export default Home