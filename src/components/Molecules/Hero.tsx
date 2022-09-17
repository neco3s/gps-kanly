import { Heading, VStack, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const Hero = () => {
  return (
    <>
      <VStack bg='blue.400' p={['16', '20', '24']}>
        <Heading fontSize={['2xl', '3xl', '4xl']} pt='30px'>
          gps-kanly
        </Heading>
        <Text fontWeight={['semibold', 'bold']} fontSize={['md', 'lg']} p={['3', '4', '5']}>
          位置情報を可視化しよう！
        </Text>
        <Button size={['sm', 'md']}>
          <Link href='/signup'>さっそくつかってみる</Link>
        </Button>
      </VStack>
    </>
  )
}
