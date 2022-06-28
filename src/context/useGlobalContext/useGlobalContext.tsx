import { createContext, useContext } from 'react'

export type Data = {
  footer?: string
  enable?: boolean
}

export type GlobalContent = {
  data: Data
  setData: (c: Data) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
  data: {
    footer: 'admin',
    enable: false,
  },
  setData: () => {},
})

export const useGlobalContext = () => useContext(MyGlobalContext)
