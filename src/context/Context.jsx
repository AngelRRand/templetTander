import React, { createContext, useContext } from 'react'


const AppContext = createContext({
    //Initial State
})


export const Context = ({children}) => {

    return (
    <AppContext.Provider value={{
        user: "Hori"
    }}>
      {children}
    </AppContext.Provider>
  )

}

export default function useLogin(){
    return useContext(AppContext)
}