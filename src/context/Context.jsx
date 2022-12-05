import React, { useContext } from 'react'
import { View, Text } from 'react-native'

const AppContenxt = useContext({
    //InitilState

})

export const Context = ({children}) => {
  return (
    <AppContenxt.Provider value={null}>
      {children}
    </AppContenxt.Provider>
  )
}