import React, { createContext } from 'react'
import { View, Text } from 'react-native'


export const Context = ({children}) => {

    const AppContenxt = createContext({})

    return (
    <AppContenxt.Provider value={null}>
      {children}
    </AppContenxt.Provider>
  )
}