import { createContext, useContext, RefObject } from 'react'

import { SVGReactComponent } from '@/ui/theme'

export type DataToStorage = {
  footer?: string
  enable?: boolean
}

export type ElementNav = {
  text: string
  link: RefObject<HTMLHeadingElement>
  icon?: SVGReactComponent
}

export type GlobalData = {
  links: ElementNav[]
}

export type GlobalContent = {
  dataStoraged: DataToStorage
  globalData: GlobalData
  setDataToStorage: (d: DataToStorage) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
  dataStoraged: {},
  globalData: {
    links: [],
  },
  setDataToStorage: () => {},
})

export const useGlobalContext = () => useContext(MyGlobalContext)
