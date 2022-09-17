import React from 'react'
import { Text, Image, Box } from '@chakra-ui/react'
// import Image from 'next/image'

export const FeatureCard = (props) => {
  const { imagePath, children } = props

  return (
    <>
      <Box p={5} shadow='md' maxW='250px' m='auto' borderRadius={10} minH='350px'>
        <Image borderRadius={10} src={imagePath} boxSize='200px' m='auto' />
        <Text mt={4}>{children}</Text>
      </Box>
    </>
  )
}
