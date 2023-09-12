import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import RHFSelectBasic from '@/components/common/RHFSelectBasic';
import RHFTextField from '@/components/common/RHFTextField';
import * as Yup from 'yup';
import FormProvider from '../common/FormProvider';
import { STATUS_CONTACT_CONTENT } from '@/assets/content';
import Iconify from '../common/Iconify';
import { useAppContext } from '../provider/AppProvider';


interface ContactEditProps {
    open: boolean,
    contact: any
    onClose: (() => void) | undefined,
    onRefeshData: (() => void)
}

export default function ContactEdit({ open, onClose, onRefeshData, contact }: ContactEditProps) {
    const {setLoading} = useAppContext();

    const ContactSchema = Yup.object().shape({

    });

    const defaultValues = useMemo(
        () => ({
            id: contact ? contact.id : '',
            fullname: contact ? contact.fullname : '',
            phone: contact ? contact.phone : '',
            email: contact ? contact.email : '',
            content: contact ? contact.content : '',
            status: contact ? contact.status : '',
        }),
        [contact],
    );
    const methods = useForm({
        mode: 'onChange',
        defaultValues,
    });
    const {
        handleSubmit,
        formState: { isSubmitting },
        reset,
        setValue
    } = methods;

    useEffect(() => {
        reset(defaultValues);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contact]);

    const onSubmit = async (data: any) => {
        const { id, status } = data
        if (contact) {
            setLoading(true)
            const res = await fetch(
                `/api/posts/${id}`,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        status: status
                    }),
                },
            );
            if (res.ok) {
                onRefeshData && onRefeshData()
                onClose && onClose()
            } else {
                setLoading(false)
                alert("Cập nhật không thành công")
            }
        }
    };

    const handleClose = () => {
        reset(defaultValues)
        onClose && onClose()
    }

    return (
        <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
            <DialogTitle>
                <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
                    <Typography sx={{ mb: 0, fontWeight: 600 }}>
                        CẬP NHẬT TRẠNG THÁI
                    </Typography>
                    <IconButton color="inherit" onClick={handleClose} >
                        <Iconify icon={'eva:close-fill'} />
                    </IconButton>
                </Stack>
            </DialogTitle>

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <Stack spacing={3}>
                        <RHFTextField name="id" label='ID' disabled />
                        <RHFTextField name="fullname" label='Họ và tên' disabled />
                        <RHFTextField name="email" label='Email' disabled />
                        <RHFTextField name="phone" label='Số điện thoại' disabled />
                        <RHFTextField
                            label={"Ghi chú"}
                            name='content'
                            rows={3}
                            multiline
                            disabled={true}
                        />
                        <RHFSelectBasic data={STATUS_CONTACT_CONTENT}
                            name='status' label='Trạng thái' required />

                    </Stack>
                </DialogContent>
                <DialogActions sx={{ pt: 0, display: 'flex', justifyContent: 'center' }}>
                    <Button fullWidth size="large" type="submit" variant="contained" className='btn btn-common' disabled={isSubmitting}>
                        CẬP NHẬT
                    </Button>
                </DialogActions>
            </FormProvider>
        </Dialog>
    )
}