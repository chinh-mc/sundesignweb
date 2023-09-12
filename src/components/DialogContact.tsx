"use client"
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Iconify from './common/Iconify'
import FormContactCustomer from './contact-customer/FormContactCustomer'
import Image from 'next/image'

const getTime = () => {
  try {
    return process.env.NEXT_PUBLIC_TIMER_POPUP
    ? parseInt(process.env.NEXT_PUBLIC_TIMER_POPUP)
    : 1000 * 2 * 60 //2p
  } catch (error) {
    return 1000 * 2 * 60
  }
}
const DialogContact = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const timer = setTimeout(async () => {
      setOpen(true)
    }, getTime());
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      <DialogTitle sx={{pb: 0}}>
        <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
          <Typography sx={{ mb: 0, fontWeight: 600 }}>
            LIÊN HỆ
          </Typography>
          <IconButton color="inherit" onClick={handleClose} >
            <Iconify icon={'eva:close-fill'} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent >
        <Box sx={{ py: 0.5 }} />
        <Typography paddingTop={1} paddingBottom={1} >Để lại thông tin để chúng tôi liên hệ với bạn!</Typography>
        <FormContactCustomer onClose={handleClose} />
        <Typography paddingTop={1} >Hoặc liên hệ trực tiếp qua zalo, messenger</Typography>
        <div style={{ paddingBottom: 10 }}>

          <a id="zalo" href="https://zalo.me/347572732" target="_blank" rel="nofollow">
            <Image src="/img/message/zalo-144.svg" alt="zalo" width={54} height={54} className='shake-img' />
          </a>
          <a id="messenger" href="https://m.me/hai.zen.2011" target="_blank" rel="nofollow">
            <Image src="/img/message/messenger-144.svg" alt="messenger" width={54} height={54} /></a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DialogContact