import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
const Home = () => {
  const navigation = useNavigation()

  const [data, setData] = useState()

  async function loadData() {
    try {
      const users = await firestore().collection('Usuarios').get()
      console.log(users.docs)
      setData(users.docs)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  function renderItem({item}) {
    return (
      <View>
        <Text>{item.data().nombre}</Text>

      </View>
    )
  }

  return (
    <View>
      <Text>HOME</Text>
      <Button title='To go Chat' onPress={() => navigation.navigate('Chat')} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />

    </View>
  )
}

export default Home