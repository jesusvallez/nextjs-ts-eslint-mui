import { ReactElement, useEffect, useState } from 'react'

import { useMediaQuery, useTheme } from '@mui/material'

import useBoolean from '@/hooks/useBoolean'

import { CustomDrawer, ElevateAppBar } from './components'
import { ElementNav } from './models'

const Nav = (): ReactElement => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const { value: isVisible, setFalse, toggle } = useBoolean(false)

  const [elements] = useState<ElementNav[]>(() => {
    const elements: ElementNav[] = [
      { text: 'HOME', link: '#id1' },
      { text: 'ABOUT ME', link: '#id2' },
      { text: 'CURRENT WORK', link: '#id3' },
      { text: 'EXPERIENCE', link: '#id4' },
      { text: 'CONTACT', link: '#id5' },
    ]

    return elements
  })

  useEffect(() => {
    if (matches) {
      setFalse()
    }
  }, [matches, setFalse])

  return (
    <>
      <ElevateAppBar text="JESÚSV." moreDetails={toggle} elements={elements} matches={matches} />
      <CustomDrawer isVisible={isVisible && !matches} close={setFalse} elements={elements} />
    </>
  )
}

export default Nav
