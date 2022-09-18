import React from 'react'
import { Header } from '@/components/Organisms/Header'
import { Footer } from '@/components/Organisms/Footer'
import { Box } from '@chakra-ui/react'

export const BaseLayout = (props) => {
  const { children } = props
  return (
    <>
      <Box position='relative' minH='100vh'>
        <Header />
        {children}
        <Footer />
      </Box>
    </>
  )
}
