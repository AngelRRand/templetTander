import React from 'react'
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (
    <View>
        <Text>HOMEEEEE</Text>
        <Button title='To go Chat' onPress={()=> navigation.navigate('Chat')}/>
    </View>
  )
}

export default Home