import { StoryFn } from '@storybook/react'
import React from 'react'

import { PrimaryButton } from '../PrimaryButton'

const sampleDefault = {
  title: 'components/Button/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
  args: {
    title: 'Hello World!',
  },
  parameters: {
    docs: {
      description: {
        component: 'プライマリーボタンコンポーネント',
      },
    },
  },
}

export default sampleDefault

export const Template: StoryFn<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
)
