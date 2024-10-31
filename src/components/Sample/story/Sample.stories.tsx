import { StoryFn } from '@storybook/react'
import React from 'react'

import { Sample } from '../Sample'

const sampleDefault = {
  title: 'Sample',
  component: Sample,
  tags: ['autodocs'],
  args: {
    children: 'Hello, World!',
  },
  parameters: {
    docs: {
      description: {
        component: 'サンプルコンポーネント',
      },
    },
  },
}

export default sampleDefault

export const Template: StoryFn<typeof Sample> = (args) => <Sample {...args} />
