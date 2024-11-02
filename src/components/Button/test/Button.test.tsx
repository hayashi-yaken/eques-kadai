import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, it, expect } from 'vitest'

import { PrimaryButton } from '../PrimaryButton'

describe('DefaultCard', () => {
  it('ボタンがレンダリングされている', () => {
    render(<PrimaryButton title='Hello World!' />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Hello World!')
  })
})
