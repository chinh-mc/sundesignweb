import { Button } from '@mui/material';
import { useMemo } from "react";

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import FormProvider from "../common/FormProvider";
import RHFTextField from '../common/RHFTextField';
import { useAppContext } from '../provider/AppProvider';


function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const digitsOnly = (value: string) => /^\d+$/.test(value)

interface FormContactCustomerProps {
  onClose?: () => void
}
const FormContactCustomer = ({onClose}: FormContactCustomerProps) => {
  const {setLoading} = useAppContext();

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
    setLoading(true)
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
      setLoading(false)
      reset(defaultValues)
      alert("Cảm ơn quý khách đã liên hệ. Chúng tôi sẽ liên lạc đến quý khách trong thời gian sớm nhất. Quý khách cũng có thể trao đổi trực tiếp qua zalo, messenger để được hỗ trợ nhanh nhất. Trân trọng!")
      onClose && onClose()
    }
  }
  return (
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
                      placeholder='Viết một chút ghi chú...'
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
  )
}

export default FormContactCustomer