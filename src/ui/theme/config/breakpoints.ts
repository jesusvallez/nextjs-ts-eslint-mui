import { createBreakpoints } from '@mui/system'

// Remember to reflect this changes at the devices sizes array on next.config.js
export const breakpointsValues = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

const breakpoints = createBreakpoints({
  values: breakpointsValues,
})

export default breakpoints
