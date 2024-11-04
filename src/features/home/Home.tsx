import { Box, Typography, BoxProps } from '@mui/material'
import { FC } from 'react'

type HomeProps = {
  sideBarWidth: number
  sideDetailWidth: number
} & BoxProps

export const Home: FC<HomeProps> = ({
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
        ようこそ
      </Typography>
    </Box>
  )
}
