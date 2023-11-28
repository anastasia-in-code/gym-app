import React from 'react'
import { Typography, Stack } from '@mui/material'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {

    return (
        <Stack
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
            className='bodyPart-card'
            type='buttton'
            alignItems='center'
            justifyContent='center'
            sx={{
                borderTop: bodyPart === item ? '4px solid #c60000' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: { xs: '140px', lg: '280px' },
                height: { xs: '135px', lg: '270px' },
                cursor: 'pointer',
                gap: '47px'
            }}>
            <Typography fontSize='24px' fontWeight="bold" color="#3A1212" textTransform="capitalize">
                {item}</Typography>
        </Stack>
    )
}

export default BodyPart