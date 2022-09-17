import { Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { FeatureCard } from '@/components/Molecules/FeatureCard'

export const FeatureSection = () => {
  return (
    <>
      <Wrap minH='50vh' spacing='30px' justify='center' p='14'>
        <WrapItem>
          <FeatureCard imagePath='images/phone.jpg'>
            gps-kanlyはスマホ端末のGPS機能を使ってデバイスの位置情報を取得します
          </FeatureCard>
        </WrapItem>
        <WrapItem>
          <FeatureCard imagePath='images/gps.jpg'>
            取得した位置情報をWeb画面から一括で確認できます
          </FeatureCard>
        </WrapItem>
        <WrapItem>
          <FeatureCard imagePath='images/time.jpg'>
            面倒なお申込みなしで今すぐご利用できます。詳細な利用方法は使い方ページをご覧ください
          </FeatureCard>
        </WrapItem>
      </Wrap>
    </>
  )
}
