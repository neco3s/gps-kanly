import React, { useState } from 'react'
import { BaseLayout } from '@/components/Templates/BaseLayout'
import { SignUpSection } from '@/components/Organisms/SignUpSection'
import { Button, Input, FormLabel, Box } from '@chakra-ui/react'
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
import { adminState } from '@/globalState/AdminState'

type Inputs = {
  company: string
  email: string
}

const SignUp = () => {
  const [error, setError] = useState(null)
  const setAdmin = useSetRecoilState<Admin>(adminState)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const q = query(collection(db, 'company'), where('companyName', '==', data.company))
    const snapshot = await getDocs(q)
    if (snapshot.docs.length > 0) {
      setError('既にその団体名は存在します')
      return
    }

    console.log(data)
    try {
      const docRef = await addDoc(collection(db, 'company'), {
        companyName: data.company.replace(/\s+/g, ''),
        adminMail: data.email,
        userList: [],
      })
      setAdmin({
        companyName: data.company.replace(/\s+/g, ''),
        adminMail: data.email,
        userList: [],
      })
      console.log('Document written with ID: ', docRef.id)
      Router.push('/map')
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
  const db: Firestore = getFirestore()

  return (
    <>
      <BaseLayout>
        <SignUpSection />
        <Box maxW='600px' borderWidth='1px' borderRadius='lg' p={4} m='auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>団体名</FormLabel>
            <Input {...register('company', { required: '団体名は必須入力です' })} />
            {errors.company && <span>{errors.company.message}</span>}
            {error && <span>{error}</span>}

            <FormLabel mt={5}>メール</FormLabel>
            <Input {...register('email', { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.email && <span>メールは必須入力です</span>}

            <Input mt={8} type='submit' value='登録' />
          </form>
        </Box>
      </BaseLayout>
    </>
  )
}

export default SignUp
