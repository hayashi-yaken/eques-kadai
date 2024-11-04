import { Box, Button, List, ListItem, ListItemText } from '@mui/material'
import { FC } from 'react'

export type SideDetailProps = {
  title: string
  categories: string[]
  properties: string[][]
  sideBarWidth: number
  sideDetailWidth: number
}

export const SideDetail: FC<SideDetailProps> = ({
  title,
  categories,
  properties,
  sideBarWidth,
  sideDetailWidth,
}) => {
  return (
    <Box
      sx={{
        width: sideDetailWidth,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: sideBarWidth,
      }}
    >
      <List>
        <ListItem sx={{ py: 2 }}>
          <ListItemText
            primary={title}
            primaryTypographyProps={{ fontWeight: 'bold', fontSize: 20 }}
          />
        </ListItem>
        {categories.map((category, index) => (
          <>
            <ListItem>
              <ListItemText
                primary={category}
                primaryTypographyProps={{ fontSize: 13 }}
              />
            </ListItem>
            {properties[index].map((property) => (
              <Button key={property} sx={{ width: '100%', color: 'black' }}>
                <ListItem sx={{ pl: 4 }}>
                  <ListItemText primary={property} />
                </ListItem>
              </Button>
            ))}
          </>
        ))}
      </List>
    </Box>
  )
}
