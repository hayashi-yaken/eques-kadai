import { Box, Button, List, ListItem, ListItemText } from '@mui/material'
import { FC } from 'react'

export type SideDetailProps = {
  title: string
  categories: string[]
  properties: string[]
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
      <List sx={{ mt: 2 }}>
        <ListItem>
          <ListItemText primary={title} primaryTypographyProps={{ fontWeight: 'bold' }} />
        </ListItem>
        {categories.map((category) => (
          <>
            <ListItem>
              <ListItemText primary={category} />
            </ListItem>
            {properties.map((property) => (
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
