import React from 'react'
import { BaseLayout } from '@/components/Templates/BaseLayout'
import { PriceSection } from '@/components/Organisms/PriceSection'
import { Hero } from '@/components/Molecules/Hero'

const Price = () => {
  return (
    <>
      <BaseLayout>
        <Hero />
        <PriceSection />
      </BaseLayout>
    </>
  )
}

export default Price
