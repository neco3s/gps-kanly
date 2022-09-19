import React from 'react'
import { Text, Box, Divider } from '@chakra-ui/react'

export const UseCard = (props) => {
  const { num, desc } = props

  return (
    <>
      <Box
        p={5}
        shadow='md'
        minW='200px'
        m='auto'
        borderRadius={10}
        minH={['150px', '180px', '200px']}
      >
        <Text fontWeight={['medium', 'semibold', 'bold']} fontSize={['xl', '2xl', '3xl']}>
          {num}
        </Text>
        <Divider orientation='horizontal' />
        <Text mt={4} fontSize={['md', 'lg', 'xl']}>
          {desc}
        </Text>
      </Box>
    </>
  )
}
