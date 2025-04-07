import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const initialAuthUser = localStorage.getItem("Users")
//   console.log(initialAuthUser);
  

  const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined);

  return(
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuthHook = () => useContext(AuthContext);