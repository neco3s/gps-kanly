import { Box, Divider, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { UseCard } from '../Molecules/UseCard'

export const UseSection = () => {
  return (
    <Box pb={10}>
      <Heading mt={10} textAlign='center'>
        使い方
      </Heading>
      <Divider orientation='horizontal' borderWidth='thin' w='100px' m='auto' mb={5} />
      <Wrap minH='50vh' spacing='30px' justify='center' p='10'>
        <WrapItem>
          <UseCard num='1' desc='管理者登録' />
        </WrapItem>
        <WrapItem>
          <UseCard num='2' desc='ユーザー追加' />
        </WrapItem>
        <WrapItem>
          <UseCard num='3' desc='アプリでログイン' />
        </WrapItem>
        <WrapItem>
          <UseCard num='4' desc='webから位置情報確認' />
        </WrapItem>
      </Wrap>
    </Box>
  )
}
