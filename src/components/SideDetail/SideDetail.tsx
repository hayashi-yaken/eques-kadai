import { Box, Button, List, ListItem, ListItemText } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC, useState } from 'react'

type PropertyPath = {
  property: string
  path: string
}

export type SideDetailProps = {
  title: string
  categories: string[]
  properties: PropertyPath[][]
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
  const pathname = usePathname()
  const [selectedProperty, setSelectedProperty] = useState<string>(pathname)
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
          <React.Fragment key={category}>
            <ListItem>
              <ListItemText
                primary={category}
                primaryTypographyProps={{ fontSize: 13 }}
              />
            </ListItem>
            {properties[index].map((property) => (
              <Link href={property.path} key={property.property}>
                <Button
                  onClick={() => {
                    setSelectedProperty(pathname)
                  }}
                  sx={{
                    width: '100%',
                    color: 'black',
                    bgcolor:
                      selectedProperty === property.path
                        ? 'rgba(234, 244, 255, 0.8)'
                        : '',
                  }}
                >
                  <ListItem sx={{ pl: 4 }}>
                    <ListItemText primary={property.property} />
                  </ListItem>
                </Button>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Box>
  )
}
