import { createBreakpoints } from '@mui/system'

// Remember to reflect this changes at the devices sizes array on next.config.js
export const breakpointsValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const breakpoints = createBreakpoints({
  values: breakpointsValues,
})

export default breakpoints
