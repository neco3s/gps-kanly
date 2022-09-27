import { adminState } from '@/globalState/AdminState'
import Admin from '@/types/Admin'
import React, { useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import Router from 'next/router'
import { Button } from '@chakra-ui/react'

const Map = () => {
  const [admin, setAdmin] = useRecoilState<Admin>(adminState)
  useEffect(() => {
    if (admin === null) {
      Router.push('/signup')
    }
  }, [admin])
  console.log(admin)

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
