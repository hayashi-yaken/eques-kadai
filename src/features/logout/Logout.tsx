import { Box, Typography, BoxProps } from '@mui/material'
import { FC } from 'react'

type LogoutProps = {
  sideBarWidth: number
  sideDetailWidth: number
} & BoxProps

export const Logout: FC<LogoutProps> = ({
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
      <Typography variant='h6' sx={{ mb: 3 }}>
        ログアウトしました
      </Typography>
    </Box>
  )
}
