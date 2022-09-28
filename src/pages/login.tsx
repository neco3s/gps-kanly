import React, { useState } from 'react'
import { LoginSection } from '@/components/Organisms/LoginSection'
import { BaseLayout } from '@/components/Templates/BaseLayout'
import { Box, FormLabel, Input, Text, Badge } from '@chakra-ui/react'
import {
  getFirestore,
  Firestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { useForm, SubmitHandler } from 'react-hook-form'
import Router from 'next/router'
import { useSetRecoilState } from 'recoil'
import Admin from '@/types/Admin'
import { adminState } from '@/globalState/adminState'
import Link from 'next/link'

type Inputs = {
  company: string
  email: string
}

const Login = () => {
  const [companyError, setcompanyError] = useState(null)
  const [emailError, setemailError] = useState(null)
  const setAdmin = useSetRecoilState<Admin>(adminState)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const q = query(collection(db, 'company'), where('companyName', '==', data.company))
    const snapshot = await getDocs(q)
    if (snapshot.docs.length == 0) {
      setcompanyError('その団体名は存在しません')
      return
    }
    const adminData: Admin = snapshot.docs[0].data() as Admin

    if (adminData.adminMail != data.email) {
      setemailError('メールが異なります！')
      return
    }

    console.log(data)
    setAdmin({
      companyName: adminData.companyName,
      adminMail: adminData.adminMail,
      userList: adminData.userList,
    })
    Router.push('/map')
  }
  const db: Firestore = getFirestore()

  return (
    <>
      <BaseLayout>
        <LoginSection />
        <Box maxW='600px' borderWidth='1px' borderRadius='lg' p={4} m='auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>団体名</FormLabel>
            <Input {...register('company', { required: '団体名は必須入力です' })} />
            {errors.company && <span>{errors.company.message}</span>}
            {companyError && <span>{companyError}</span>}

            <FormLabel mt={5}>メール</FormLabel>
            <Input {...register('email', { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span>
                メールは必須入力です
                <br />
              </span>
            )}
            {emailError && (
              <span>
                {emailError}
                <br />
              </span>
            )}

            <Input mt={8} type='submit' value='ログイン' />
          </form>
        </Box>
        <Text textAlign='center' m={2}>
          登録済みでない方は
          <Link href='/signup' color='blue'>
            <Badge colorScheme='blue' _hover={{ cursor: 'pointer' }}>
              登録ページ
            </Badge>
          </Link>
          から登録してください
        </Text>
      </BaseLayout>
    </>
  )
}

export default Login
