import { userEvent } from '@storybook/test'
import { render, screen } from '@testing-library/react'
import React, { act } from 'react'
import { describe, expect, it } from 'vitest'

import { SideBar } from '../SideBar'

describe('SideBar', () => {
  it('レンダリングされている', () => {
    render(<SideBar />)
    const buttonElement = screen.getAllByRole('button')
    expect(buttonElement).toHaveLength(3)
  })

  it('選択状態によってアイコンの表示が切り替わる', async () => {
    render(<SideBar />)
    const user = userEvent.setup()
    const buttonElements = screen.getAllByRole('button')

    await act(async () => {
      await user.click(buttonElements[0])
    })
    expect(buttonElements[0].querySelector('svg')).toHaveClass('MuiSvgIcon-colorPrimary')

    for (let i = 1; i < buttonElements.length; i++) {
      expect(buttonElements[i - 1].querySelector('svg')).toHaveClass(
        'MuiSvgIcon-colorPrimary',
      )
      expect(buttonElements[i].querySelector('svg')).toHaveClass('MuiSvgIcon-colorAction')

      await act(async () => {
        await user.click(buttonElements[i])
      })

      expect(buttonElements[i - 1].querySelector('svg')).toHaveClass(
        'MuiSvgIcon-colorAction',
      )
      expect(buttonElements[i].querySelector('svg')).toHaveClass(
        'MuiSvgIcon-colorPrimary',
      )
    }
  })
})
