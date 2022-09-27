import { adminState } from '@/globalState/adminState'
import Admin from '@/types/Admin'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Router from 'next/router'
import { Button } from '@chakra-ui/react'

const Map = () => {
  const [admin, setAdmin] = useRecoilState<Admin>(adminState)
  useEffect(() => {
    if (admin === null) {
      Router.push('/signup')
    }
  }, [admin])

  const handleSignOut = () => {
    setAdmin(null)
  }

  return (
    <>
      <div>Map page</div>
      <Button onClick={handleSignOut}>ログアウト</Button>
    </>
  )
}

export default Map
