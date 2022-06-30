import { ReactElement, useEffect } from 'react'

import { useMediaQuery, useTheme } from '@mui/material'

import useGlobalContext from '@/context/useGlobalContext'
import useBoolean from '@/hooks/useBoolean'

import { CustomDrawer, ElevateAppBar } from './components'

const Nav = (): ReactElement => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const { globalData } = useGlobalContext()
  const { value: isVisible, setFalse, toggle } = useBoolean(false)

  useEffect(() => {
    if (matches) {
      setFalse()
    }
  }, [matches, setFalse])

  return (
    <>
      <ElevateAppBar
        text="Lorem ipsum dolor."
        moreDetails={toggle}
        elements={globalData.links}
        matches={matches}
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
