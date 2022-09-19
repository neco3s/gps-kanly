import React from 'react'
import { BaseLayout } from '@/components/Templates/BaseLayout'
import { Hero } from '@/components/Molecules/Hero'
import { UseSection } from '@/components/Organisms/UseSection'

const Use = () => {
  return (
    <>
      <BaseLayout>
        <Hero />
        <UseSection />
      </BaseLayout>
    </>
  )
}

export default Use
