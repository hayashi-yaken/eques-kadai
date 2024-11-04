'use client'

import { AddHome, Settings, Logout } from '@mui/icons-material'
import { Box, List, BoxProps } from '@mui/material'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'

import { SideBarIcon } from './SideBarIcon'

type SideBarProps = {
  width?: number
} & BoxProps

export const SideBar: FC<SideBarProps> = ({ width = 70, sx, ...restProps }) => {
  const pathname = usePathname()
  const [selectedIcon, setSelectedIcon] = useState<string>(pathname)
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
          icon={<AddHome color={selectedIcon.includes('home') ? 'primary' : 'action'} />}
          path='/home/browser/microsoft'
          onClick={() => setSelectedIcon('/home')}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
        <SideBarIcon
          icon={
            <Settings color={selectedIcon.includes('setting') ? 'primary' : 'action'} />
          }
          path='/setting/account'
          onClick={() => setSelectedIcon('/setting/account')}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
      </List>
      <List>
        <SideBarIcon
          icon={<Logout color={selectedIcon.includes('logout') ? 'primary' : 'action'} />}
          path='/logout'
          onClick={() => setSelectedIcon('/logout')}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
      </List>
    </Box>
  )
}
