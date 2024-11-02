import { Button, ButtonProps } from '@mui/material'
import { FC } from 'react'

type PrimaryButtonProps = {
  title: string
} & ButtonProps

export const PrimaryButton: FC<PrimaryButtonProps> = ({ title, sx, ...restProps }) => {
  return (
    <Button
      variant='contained'
      sx={{
        bgcolor: '#007FFF',
        '&:hover': {
          bgcolor: '#0072E5',
        },
        ...sx,
      }}
      {...restProps}
    >
      {title}
    </Button>
  )
}
