import React from 'react'
import { Text, Box, Divider } from '@chakra-ui/react'
// import Image from 'next/image'

export const PriceCard = (props) => {
  const { title, desc } = props

  return (
    <>
      <Box
        p={5}
        shadow='md'
        minW='250px'
        m='auto'
        borderRadius={10}
        minH={['150px', '180px', '200px']}
      >
        <Text fontWeight={['medium', 'semibold', 'bold']} fontSize={['xl', '2xl', '3xl']}>
          {title}
        </Text>
        <Divider orientation='horizontal' />
        <Text mt={4} fontSize={['md', 'lg', 'xl']}>
          {desc}
        </Text>
      </Box>
    </>
  )
}
