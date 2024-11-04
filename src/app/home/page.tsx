'use client'

import { Box } from '@mui/material'
import React from 'react'

import { SideBar } from '@/components/SideBar'
import { SideDetail } from '@/components/SideDetail'

import { Home } from '@/features/home'

export default function Component() {
  const sideBarWidth = 70
  const sideDetailWidth = 280
  return (
    <Box display='flex'>
      <Box display='flex'>
        <SideBar width={sideBarWidth} />
        <SideDetail
          title='ホーム'
          categories={['ブラウザ', 'ゲーム']}
          properties={[
            [{ property: 'Microsoft Edge', path: '/browser/microsoft' }],
            [{ property: 'Minecraft', path: '/game/minecraft' }],
          ]}
          sideBarWidth={sideBarWidth}
          sideDetailWidth={sideDetailWidth}
        />
      </Box>
      <Home
        sideBarWidth={sideBarWidth}
        sideDetailWidth={sideDetailWidth}
        sx={{ pt: 10 }}
      />
    </Box>
  )
}
