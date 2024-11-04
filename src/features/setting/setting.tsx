import { Box, Typography, Chip, BoxProps } from '@mui/material'
import { FC } from 'react'

import { PrimaryButton } from '@/components/Button'
import { InputTextField } from '@/components/InputTextField'

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
      <Typography variant='h6' sx={{ mb: 3 }}>
        アカウント情報の変更
      </Typography>
      <Chip label='メンバー' size='small' sx={{ mb: 3 }} />
      <Box component='form' sx={{ maxWidth: 400 }}>
        <InputTextField title='名前' sx={{ mb: 5 }} />
        <InputTextField title='メールアドレス' sx={{ mb: 5 }} />
        <PrimaryButton title='変更する' />
      </Box>
    </Box>
  )
}
