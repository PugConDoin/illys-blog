import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Heading, Link, Button, Flex, useColorMode } from 'theme-ui'

export const Header = ({ siteTitle, siteDescription }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Box as='header' sx={{ bg: 'highlight', mb: '1.45rem' }}>
      <Box
        as='div'
        sx={{
          m: '0 auto',
          maxWidth: '640px',
          p: '1.45rem 1.0875rem',
        }}
      >
        <Flex>
          <Box sx={{ flex: '1 1 auto', flexDirection: 'column' }}>
            <Link as={GatsbyLink} to='/'>
              <Heading>{siteTitle}</Heading>
            </Link>
            <Box as='p' variant='styles.p'>
              {siteDescription}
            </Box>
          </Box>
          <Button
            onClick={(e) => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default')
            }}
          >
            {colorMode === 'default' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
