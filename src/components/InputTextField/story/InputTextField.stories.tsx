import { StoryFn } from '@storybook/react'
import React from 'react'

import { InputTextField } from '../InputTextField'

const SampleDefault = {
  title: 'components/InputTextField',
  component: InputTextField,
  tags: ['autodocs'],
  args: {
    title: '名前',
  },
  parameters: {
    docs: {
      description: {
        component: 'インプットフィールドコンポーネント',
      },
    },
  },
}

export default SampleDefault

export const Template: StoryFn<typeof InputTextField> = (args) => (
  <InputTextField {...args} />
)
