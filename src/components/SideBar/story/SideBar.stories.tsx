import { StoryFn } from '@storybook/react'
import React from 'react'

import { SideBar } from '../SideBar'

const sampleDefault = {
  title: 'components/SideBar',
  component: SideBar,
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

export const Template: StoryFn<typeof SideBar> = (args) => <SideBar {...args} />
