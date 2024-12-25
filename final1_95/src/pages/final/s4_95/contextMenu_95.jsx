import { useState, useEffect, createContext, useContext } from 'react'
import { toast } from 'react-toastify'
import menu_data from './menu_data'

const MenuContext_95 = createContext()

const MenuContextProvider_95 = ({ children }) => {
  return (
    <MenuContext_95.Provider value={{}}>{children}</MenuContext_95.Provider>
  )
}

const useMenuContext_95 = () => {
  return useContext(MenuContext_95)
}

export { MenuContextProvider_95, useMenuContext_95 }
