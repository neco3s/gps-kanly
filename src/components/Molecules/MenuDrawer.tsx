import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'

export const MenuDrawer = (props) => {
  const { isOpen, onClose } = props
  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>メニュー</DrawerHeader>
          <DrawerBody>
            <VStack spacing='24px' pt='2' fontWeight={['bold', 'bold', 'black']}>
              <Link href='/price'>
                <Text onClick={onClose} _hover={{ color: 'gray.400', cursor: 'pointer' }}>
                  価格
                </Text>
              </Link>
              <Link href='/use'>
                <Text onClick={onClose} _hover={{ color: 'gray.400', cursor: 'pointer' }}>
                  使い方
                </Text>
              </Link>
              <Link href='/signup'>
                <Text onClick={onClose} _hover={{ color: 'gray.400', cursor: 'pointer' }}>
                  使ってみる
                </Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
