import { ReactElement, useEffect } from 'react'

import { Breakpoint, useMediaQuery, useTheme } from '@mui/material'

import useGlobalContext from '@/context/useGlobalContext'
import useBoolean from '@/hooks/useBoolean'

import { CustomDrawer, ElevateAppBar } from './components'

const Nav = (): ReactElement => {
  const theme = useTheme()
  const breakpoint: Breakpoint = 'lg'
  const matches = useMediaQuery(theme.breakpoints.up(breakpoint))
  const { value: isVisible, setFalse, toggle } = useBoolean(false)
  const { globalData } = useGlobalContext()

  useEffect(() => {
    if (matches && globalData.links.length > 0) {
      setFalse()
    }
  }, [matches, globalData.links, setFalse])

  return (
    <>
      <ElevateAppBar
        text="Lorem ipsum dolor."
        moreDetails={toggle}
        elements={globalData.links}
        breakpoint={breakpoint}
      />
      <CustomDrawer
        isVisible={isVisible && !matches}
        close={setFalse}
        elements={globalData.links}
      />
    </>
  )
}

export default Nav
