"use client"
import FormProvider from '@/components/common/FormProvider';
import RHFTextField from '@/components/common/RHFTextField';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Loading from '@/components/common/Loading';
import { Button, Container, Stack, Typography } from '@mui/material';
import { signIn, useSession } from "next-auth/react";
const Login = () => {
  const router = useRouter();
  const session = useSession();
  const LoginSchema = Yup.object().shape({
    email: Yup.string().trim().email("Định dạng email không hợp lệ")
      .required("Vui lòng nhập email"),
    password: Yup.string().trim().required("Vui lòng nhập mật khẩu"),
  });

  const defaultValues = useMemo(
    () => ({
      email: '',
      password: '',
      rememberMe: false,
    }),
    []
  );

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
    defaultValues
  });

  const {
    handleSubmit,
    setFocus,
    formState: {isSubmitting}
  } = methods;


  const onSubmit = async (data: any) => {
    const { email, password } = data
    try {
       signIn("credentials", {
        email,
        password,
      });
    
    } catch (error) {
      console.log(error)
    }
  };

  if (session.status === "loading") {
    return <Loading />;
  }
  if (session.status === "authenticated") {
    router?.push("/adm/contacts");
    return <Loading />;
  }
  if (session.status === "unauthenticated") {
    return (
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="sm" sx={{ paddingBottom: 5, paddingTop: 5 }}>
          <Typography variant='h5' sx={{ fontWeight: 600 }}>ĐĂNG NHẬP TÀI KHOẢN</Typography>
          <Stack spacing={3} paddingBottom={2}>
            <RHFTextField
              type="email"
              label={"Email"}
              name='email'
              disabled={isSubmitting}
            />

            <RHFTextField
              type="password"
              label={"Mật khẩu"}
              name='password'
              password
              disabled={isSubmitting}
            />
          </Stack>

          <Button fullWidth size="large" type="submit" variant="contained" disabled={isSubmitting} className='btn-common btn' style={{ width: "100%" }}>
            Đăng nhập
          </Button>
        </Container>
      </FormProvider>
    )
  }

}

export default Login