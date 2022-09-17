import { Box, Flex, Spacer, Stack, VStack, HStack, Text, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { BaseLayout } from '@/components/Templates/BaseLayout'
import { Hero } from '@/components/Molecules/Hero'
import { FeatureCard } from '@/components/Molecules/FeatureCard'
import { FeatureSection } from '@/components/Organisms/FeatureSection'

export default function Home() {
  return (
    <>
      <BaseLayout>
        <Hero />
        <FeatureSection />
      </BaseLayout>
    </>
  )
}
