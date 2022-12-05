import { View, Text } from 'react-native'
import React from 'react'
import useLogin from '../context/Context'

const Login = () => {
    const {user} = useLogin()
    console.log(user)
  return (
    <View>
      <Text>Login to the app</Text>
    </View>
  )
}

export default Login