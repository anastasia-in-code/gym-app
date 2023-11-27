import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import bannerImg from '../assets/imgs/banner.jpg'

const HomeBanner = () => {
    return (
        <Box sx={{
            mt: { l: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position='relative' p='20px'>
            <Typography color='primeRed' fontWeight='600px' fontSize='26px'>
                Gyp App
            </Typography>
            <Typography fontWeight={700} mb='23px' mt='30px'
                sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
                Train, Transform <br /> and Triumph
            </Typography>
            <Typography fontSize='22px'
                lineHeight='35px' mb={4} href='#exercises'>
                Elevate Your Strength Every Rep.
            </Typography>
            <Button variant='contained' color='error' sx={{backgroundColor: 'primeRed', padding:'10px'}}>Checkout Exercises</Button>
            <img className='banner-img' src={bannerImg} />
            <Typography fontWeight={600} color='primeRed' fontSize={200}
             sx={{
                opacity:0.1, 
                display: {
                    lg: 'block',
                    xs: 'none'
                }
                }}>
                Exercise
            </Typography>
        </Box>
    )
}

export default HomeBanner