import { ListItem, ListItemIcon, Button, ListItemProps } from '@mui/material'
import { FC } from 'react'

type SideBarIconProps = {
  icon: React.ReactNode
} & ListItemProps

export const SideBarIcon: FC<SideBarIconProps> = ({ icon, ...restProps }) => {
  return (
    <ListItem {...restProps}>
      <ListItemIcon>
        <Button>{icon}</Button>
      </ListItemIcon>
    </ListItem>
  )
}
