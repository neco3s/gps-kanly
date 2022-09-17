import React from 'react'
import { Header } from '@/components/Organisms/Header'

export const BaseLayout = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}
