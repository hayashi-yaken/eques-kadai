import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SideDetail, SideDetailProps } from '../SideDetail'

const testProps: SideDetailProps = {
  title: '設定',
  categories: ['ユーザー設定'],
  properties: [['アカウント情報', 'パスワード変更', '2段階認証']],
  sideBarWidth: 70,
  sideDetailWidth: 200,
}

describe('SideDetail', () => {
  it('レンダリングされている', () => {
    render(<SideDetail {...testProps} />)
    const { title, categories, properties } = testProps
    expect(screen.getByText(title)).toBeTruthy()
    expect(screen.getByText(categories[0])).toBeTruthy()
    expect(screen.getByText(properties[0][0])).toBeTruthy()
  })
})
