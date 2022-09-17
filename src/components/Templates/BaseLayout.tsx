import React from 'react'
import { Header } from '@/components/Organisms/Header'
import { Footer } from '@/components/Organisms/Footer'

export const BaseLayout = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
