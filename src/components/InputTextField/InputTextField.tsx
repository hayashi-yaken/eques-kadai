import { Box, TextField, Typography, BoxProps } from '@mui/material'
import { FC } from 'react'

type InputTextFieldProps = {
  title: string
} & BoxProps

export const InputTextField: FC<InputTextFieldProps> = ({ title, ...restProps }) => {
  return (
    <Box {...restProps}>
      <Typography variant='body2' mb={2}>
        {title}
      </Typography>
      <TextField fullWidth placeholder={`${title}を入力してください`} size='small' />
    </Box>
  )
}
