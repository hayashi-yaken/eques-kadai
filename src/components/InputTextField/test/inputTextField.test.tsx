import { userEvent } from '@storybook/test'
import { act, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { InputTextField } from '../InputTextField'

describe('InputTextField', () => {
  it('レンダリングされている', () => {
    render(<InputTextField title='名前' />)
    expect(screen.getByText('名前')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('名前を入力してください')).toBeInTheDocument()
  })

  it('テキストボックスに値が入力される', async () => {
    render(<InputTextField title='名前' />)
    const user = userEvent.setup()
    const input = screen.getByPlaceholderText('名前を入力してください')
    await act(async () => {
      await user.type(input, 'test')
    })
    expect(input).toHaveValue('test')
  })
})
