/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'
import LoadingGlobal from '../common/LoadingGlobal';

type appContextType = {
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const appContextDefaultValues: appContextType = {
  loading: false,
  setLoading: () => { }
}

const AppContext = createContext<appContextType>(appContextDefaultValues);
export const useAppContext = () => useContext(AppContext)

interface IAppContext {
  children: ReactNode
}

const AppContextProvider: React.FC<IAppContext> = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false)
  // Context data
  const appContextData = {loading, setLoading}

  // Return provider
  return (
    <AppContext.Provider value={appContextData}>
      <LoadingGlobal type="RingLoader" visible={loading} delay={1000} />
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

