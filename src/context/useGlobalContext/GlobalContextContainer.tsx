import { createRef } from 'react'

import { WithChildren } from '@/helpers/react'
import useLocalStorage from '@/hooks/useLocalStorage'

import { DataToStorage, GlobalData, MyGlobalContext } from './useGlobalContext'

export const defaultGlobalConfig: DataToStorage = {
  footer: 'admin',
  enable: true,
}

export const globalNavLinks: GlobalData['links'] = [
  { text: 'HOME', link: createRef<HTMLHeadingElement>() },
  { text: 'ABOUT ME', link: createRef<HTMLHeadingElement>() },
  { text: 'CURRENT WORK', link: createRef<HTMLHeadingElement>() },
  { text: 'EXPERIENCE', link: createRef<HTMLHeadingElement>() },
  { text: 'CONTACT', link: createRef<HTMLHeadingElement>() },
]

const GlobalContextContainer = ({ children }: WithChildren) => {
  const [info, setInfo] = useLocalStorage<DataToStorage>('global', defaultGlobalConfig)

  return (
    <MyGlobalContext.Provider
      value={{
        dataStoraged: info,
        globalData: {
          links: globalNavLinks,
        },
        setDataToStorage: (value) =>
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
