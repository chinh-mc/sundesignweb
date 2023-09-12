/* eslint-disable @next/next/no-img-element */
"use client";

import FormProvider from '@/components/common/FormProvider';
import { useMemo } from "react";
import { Button, Container, Stack, Typography } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import RHFTextField from './common/RHFTextField';


function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const digitsOnly = (value: string) => /^\d+$/.test(value)

const Contact = () => {

  const LoginSchema = Yup.object().shape({
    fullname: Yup.string().trim()
      .required("Hạng mục bắt buộc nhập"),
    email: Yup
      .string().trim()
      .email("Định dạng email không hợp lệ")
      .required("Hạng mục bắt buộc nhập")
      .max(100, "Tối đa 100 ký tự"),
    phone: Yup.string().required("Hạng mục bắt buộc nhập").max(11, "Tối đa 11 ký tự").test('Digits only', 'Chỉ nhập số', digitsOnly)
  });

  const defaultValues = useMemo(
    () => ({
      id: '',
      fullname: '',
      phone: '',
      email: "",
      content: '',
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
    formState: { isSubmitting },
    reset
  } = methods;


  const onSubmit = async (data: any) => {
    const { fullname, phone, email, content } = data
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: getRndInteger(1000000000, 9999999900),
        fullname,
        phone,
        email,
        content,
        status: 'NEW_CONTACT'
      }),
    });
    if (res.status == 201) {
      reset(defaultValues)
      alert("Cảm ơn quý khách đã liên hệ. Chúng tôi sẽ liên lạc đến quý khách trong thời gian sớm nhất. Quý khách cũng có thể trao đổi trực tiếp qua zalo, messenger để được hỗ trợ nhanh nhất. Trân trọng!")
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-text section-header text-center">
              <div>
                <h2 className="section-title">Liên hệ</h2>
                <div className="desc-text">
                  <p>Để lại thông tin để chúng tôi liên lạc với bạn, hoặc liên hệ trực tiếp qua zalo, messenger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <RHFTextField
                      type="text"
                      label={"Họ và tên"}
                      name='fullname'
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <RHFTextField
                      type="email"
                      label={"Email"}
                      name='email'
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <RHFTextField
                      type="text"
                      label={"Số điện thoại"}
                      name='phone'
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <RHFTextField
                      label={"Ghi chú"}
                      placeholder='Viết mốt chút ghi chú...'
                      name='content'
                      rows={4}
                      multiline
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>


              <div className="col-md-12">
                <div className="submit-button">
                  <Button className="btn btn-common" size="large" type="submit" variant="contained" disabled={isSubmitting}>
                    Gửi thông tin</Button>
                  <div className="clearfix" />
                </div>
              </div>
            </FormProvider>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="contact-img">
              <img src="img/contact/01.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-1">
        </div>

        <div className="col-lg-1">
        </div>
      </div>
    </section >
  )
}

export default Contact