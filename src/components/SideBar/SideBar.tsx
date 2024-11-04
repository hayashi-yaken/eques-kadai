'use client'

import { AddHome, Settings, Logout } from '@mui/icons-material'
import { Box, List, BoxProps } from '@mui/material'
import { FC, useState } from 'react'

import { SideBarIcon } from './SideBarIcon'
import { usePathname } from 'next/navigation'

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
          icon={<AddHome color={selectedIcon === '/' ? 'primary' : 'action'} />}
          path='/'
          onClick={() => setSelectedIcon('/')}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
        <SideBarIcon
          icon={<Settings color={selectedIcon === '/setting' ? 'primary' : 'action'} />}
          path='/setting'
          onClick={() => setSelectedIcon('/setting')}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
      </List>
      <List>
        <SideBarIcon
          icon={<Logout color={selectedIcon === '/logout' ? 'primary' : 'action'} />}
          path='/logout'
          onClick={() => setSelectedIcon('/logout')}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
      </List>
    </Box>
  )
}
