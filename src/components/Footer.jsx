import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import fitLogo from '../assets/imgs/logo.png'


const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <Stack direction='row' >
          <img src={fitLogo} alt='logo' height='40px' />
          <Typography color='primeRed' fontWeight='600px' fontSize='26px'>
            GymFlex Pro
          </Typography>
        </Stack>
        <Typography variant='h6' pb='40px' >Created with ❤️ by Anastasiia Perih </Typography>
      </Stack>

    </Box>
  )
}

export default Footer