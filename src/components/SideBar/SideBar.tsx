'use client'

import { AddHome, Settings, Logout } from '@mui/icons-material'
import { Box, List, BoxProps } from '@mui/material'
import { FC, useState } from 'react'

import { SideBarIcon } from './SideBarIcon'

type SideBarProps = {
  width?: number
} & BoxProps

export const SideBar: FC<SideBarProps> = ({ width = 70, sx, ...restProps }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <Box
      sx={{
        width: width,
        bgcolor: 'grey.100',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ...sx,
      }}
      {...restProps}
    >
      <List>
        <SideBarIcon
          icon={<AddHome color={selectedIndex === 0 ? 'primary' : 'action'} />}
          onClick={() => handleListItemClick(0)}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
        <SideBarIcon
          icon={<Settings color={selectedIndex === 1 ? 'primary' : 'action'} />}
          onClick={() => handleListItemClick(1)}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
      </List>
      <List>
        <SideBarIcon
          icon={<Logout color={selectedIndex === 2 ? 'primary' : 'action'} />}
          onClick={() => handleListItemClick(2)}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
      </List>
    </Box>
  )
}
