import { StoryFn } from '@storybook/react'
import React from 'react'

import { SideDetail } from '../SideDetail'

const sampleDefault = {
  title: 'components/SideDetail',
  component: SideDetail,
  tags: ['autodocs'],
  args: {
    children: 'Hello, World!',
  },
  parameters: {
    docs: {
      description: {
        component: 'サイドバーコンポーネント',
      },
    },
  },
}

export default sampleDefault

export const Template: StoryFn<typeof SideDetail> = (args) => <SideDetail {...args} />
