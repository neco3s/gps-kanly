import React from 'react'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  Show,
  useDisclosure,
  Drawer,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { MenuDrawer } from '@/components/Molecules/MenuDrawer'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex bg='gray.100' p='4'>
        <Box p='2'>
          <Link href='/'>
            <Heading _hover={{ color: 'gray.400', cursor: 'pointer' }} size='md'>
              gps-kanly
            </Heading>
          </Link>
        </Box>
        <Spacer />
        <Show above='sm'>
          <HStack spacing='24px' pt='2' fontWeight={['medium', 'bold', 'black']}>
            <Link href='/price'>
              <Text _hover={{ color: 'gray.400', cursor: 'pointer' }}>価格</Text>
            </Link>
            <Link href='/use'>
              <Text _hover={{ color: 'gray.400', cursor: 'pointer' }}>使い方</Text>
            </Link>
            <Link href='/signup'>
              <Text _hover={{ color: 'gray.400', cursor: 'pointer' }}>使ってみる</Text>
            </Link>
          </HStack>
        </Show>
        <Show below='sm'>
          <HamburgerIcon
            w={10}
            h={10}
            _hover={{ color: 'gray.400', cursor: 'pointer' }}
            onClick={onOpen}
          />
        </Show>
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
