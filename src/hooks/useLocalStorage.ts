import { useEffect, useState } from 'react'

const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [oldKey, setOldKey] = useState(key)
  const [value, setValue] = useState<T>(defaultValue)

  useEffect(() => {
    const item = globalThis.window.localStorage.getItem(key)
    item && setValue(JSON.parse(item))
  }, [key, defaultValue])

  useEffect(() => {
    const rawValue = JSON.stringify(value)
    localStorage.setItem(key, rawValue)
    setOldKey(key)
  }, [key, value, oldKey])

  return [value, setValue] as const
}

export default useLocalStorage
