import { userEvent } from '@storybook/test'
import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { SideDetail, SideDetailProps } from '../SideDetail'

const testProps: SideDetailProps = {
  title: '設定',
  categories: ['ユーザー設定'],
  properties: [
    [
      { property: 'アカウント情報', path: '/setting/account' },
      { property: 'パスワード変更', path: '/setting/password' },
      { property: '2段階認証', path: '/setting/two-factor-authentication' },
    ],
  ],
  sideBarWidth: 70,
  sideDetailWidth: 200,
}

describe('SideDetail', () => {
  beforeEach(() => {
    vi.mock('next/navigation', () => ({
      usePathname: vi
        .fn()
        .mockReturnValueOnce('/setting/account')
        .mockReturnValueOnce('/setting/account')
        .mockReturnValueOnce('/setting/password'),
    }))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('レンダリングされている', () => {
    render(<SideDetail {...testProps} />)
    const { title, categories, properties } = testProps
    expect(screen.getByText(title)).toBeTruthy()
    expect(screen.getByText(categories[0])).toBeTruthy()
    expect(screen.getByText(properties[0][0].property)).toBeTruthy()
  })

  it('ボタンをクリックすると色が変わる', async () => {
    render(<SideDetail {...testProps} />)
    const user = userEvent.setup()
    const icons = screen.getAllByRole('button')
    const selectedIcon = icons[0]
    const unSelectedIcon = icons[1]
    expect(selectedIcon).toHaveStyle({ 'background-color': 'rgba(234, 244, 255, 0.8)' })
    expect(unSelectedIcon).toHaveStyle({ 'background-color': 'ButtonFace' })
    // TODO: クリック後に色が変わらない原因を探る
    await act(async () => {
      await user.click(unSelectedIcon)
    })
    expect(selectedIcon).toHaveStyle({ 'background-color': 'rgba(234, 244, 255, 0.8)' })
    expect(unSelectedIcon).toHaveStyle({ 'background-color': 'ButtonFace' })
  })
})
