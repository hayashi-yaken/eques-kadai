import { Box, BoxProps } from '@mui/material'
import { FC } from 'react'

import { Account } from './Detail/Account'

type SettingProps = {
  sideBarWidth: number
  sideDetailWidth: number
} & BoxProps

export const Setting: FC<SettingProps> = ({
  sideBarWidth,
  sideDetailWidth,
  sx,
  ...restProps
}) => {
  return (
    <Box
      component='main'
      sx={{ flexGrow: 1, p: 3, ml: `${sideBarWidth + sideDetailWidth}px`, ...sx }}
      {...restProps}
    >
      <Account />
    </Box>
  )
}
