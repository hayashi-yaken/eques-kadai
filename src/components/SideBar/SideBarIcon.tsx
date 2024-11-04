import { ListItem, ListItemIcon, Button, ListItemProps } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

type SideBarIconProps = {
  icon: React.ReactNode
  path: string
  onClick?: () => void
} & Omit<ListItemProps, 'onClick'>

export const SideBarIcon: FC<SideBarIconProps> = ({
  icon,
  path,
  onClick,
  ...restProps
}) => {
  return (
    <ListItem {...restProps}>
      <ListItemIcon>
        <Link href={path}>
          <Button onClick={onClick}>{icon}</Button>
        </Link>
      </ListItemIcon>
    </ListItem>
  )
}
