import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'

import { Sample } from '../Sample'

describe('DefaultCard', () => {
  it('Hello World! が表示されている', () => {
    render(<Sample>Hello World!</Sample>)
    const element = screen.getByText('Hello World!')
    expect(element).toBeInTheDocument()
  })
})
