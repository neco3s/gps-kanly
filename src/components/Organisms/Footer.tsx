import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <>
      <Box bg='gray.100' p='2' textAlign='center' w='full' position='absolute' bottom='0'>
        <Text>&copy; 2022 Kanke Shunta All Right Reserved</Text>
      </Box>
    </>
  )
}
