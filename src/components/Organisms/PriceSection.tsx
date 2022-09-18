import { Divider, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { PriceCard } from '../Molecules/PriceCard'

export const PriceSection = () => {
  return (
    <>
      <Heading mt={10} textAlign='center'>
        価格
      </Heading>
      <Divider orientation='horizontal' borderWidth='thin' w='100px' m='auto' mb={5} />
      <Wrap minH='50vh' spacing='30px' justify='center' p='10'>
        <WrapItem>
          <PriceCard title='Hobby' desc='~５名まで無料' />
        </WrapItem>
        <WrapItem>
          <PriceCard title='Pro' desc='準備中' />
        </WrapItem>
        <WrapItem>
          <PriceCard title='Enterprise' desc='準備中' />
        </WrapItem>
      </Wrap>
    </>
  )
}
