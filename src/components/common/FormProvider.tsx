import { FormEventHandler } from 'react';
// form
import { FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

interface FormProvider {
  children: React.ReactNode
  methods: any,
  onSubmit?: FormEventHandler<HTMLFormElement>,
  autoComplete?: 'on' | 'off'
}

export default function FormProvider({ children, autoComplete = 'off', onSubmit, methods }: FormProvider) {
  return (
    <Form {...methods} >
      <form onSubmit={onSubmit} noValidate
        autoComplete={autoComplete} >{children}</form>
    </Form>
  );
}
