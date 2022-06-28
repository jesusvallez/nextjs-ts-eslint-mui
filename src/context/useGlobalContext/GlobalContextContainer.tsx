import React from 'react'

import { WithChildren } from '@/helpers/react'
import useLocalStorage from '@/hooks/useLocalStorage'

import { Data, MyGlobalContext } from './useGlobalContext'

export const defaultGlobalConfig: Data = {
  footer: 'admin',
  enable: true,
}

const GlobalContextContainer = ({ children }: WithChildren) => {
  const [info, setInfo] = useLocalStorage<Data>('global', defaultGlobalConfig)

  return (
    <MyGlobalContext.Provider
      value={{
        data: info,
        setData: (value) =>
          setInfo({
            ...info,
            ...value,
          }),
      }}
    >
      {children}
    </MyGlobalContext.Provider>
  )
}

export default GlobalContextContainer
