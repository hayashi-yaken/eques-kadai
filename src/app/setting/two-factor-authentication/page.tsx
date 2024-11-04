'use client'

import { Box } from '@mui/material'
import React from 'react'

import { SideBar } from '@/components/SideBar'
import { SideDetail } from '@/components/SideDetail'

import { Setting } from '@/features/setting'

export default function Component() {
  const sideBarWidth = 70
  const sideDetailWidth = 280
  return (
    <Box display='flex'>
      <Box display='flex'>
        <SideBar width={sideBarWidth} />
        <SideDetail
          title='設定'
          categories={['ユーザー設定']}
          properties={[
            [
              { property: 'アカウント情報', path: '/setting/account' },
              { property: 'パスワード変更', path: '/setting/password' },
              { property: '2段階認証', path: '/setting/two-factor-authentication' },
            ],
          ]}
          sideBarWidth={sideBarWidth}
          sideDetailWidth={sideDetailWidth}
        />
      </Box>
      <Setting
        sideBarWidth={sideBarWidth}
        sideDetailWidth={sideDetailWidth}
        sx={{ pt: 10 }}
      />
    </Box>
  )
}
