'use client'

import { Box } from '@mui/material'
import React from 'react'

import { SideBar } from '@/components/SideBar'
import { Logout } from '@/features/logout'

export default function Component() {
  const sideBarWidth = 70
  const sideDetailWidth = 280
  return (
    <Box display='flex'>
      <Box display='flex'>
        <SideBar width={sideBarWidth} />
      </Box>
      <Logout
        sideBarWidth={sideBarWidth}
        sideDetailWidth={sideDetailWidth}
        sx={{ pt: 10 }}
      />
    </Box>
  )
}
