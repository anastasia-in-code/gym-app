import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import equipmentIcon from '../assets/icons/equipment.png'
import targetIcon from '../assets/icons/target.png'
import bodyPartIcon from '../assets/icons/bodyPart.png'

const Details = ({ exercisesDetailsData }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exercisesDetailsData

  const extraDetails = [
    {
      icon: bodyPartIcon,
      name: bodyPart
    }, {
      icon: targetIcon,
      name: target
    }, {
      icon: equipmentIcon,
      name: equipment
    }
  ]

  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }} >
      <img src={gifUrl} alt={name} loading='lazy' className='details-image' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant='h3' sx={{ textTransform: 'capitalize' }}>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetails.map((item, i) => (
          <Stack key={i} direction='row' gap='24px' alignItems='center'>
            <Button sx={{backgroundColor: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{width:'50px', height: '50px'}}/>
            </Button>
            <Typography textTransform='capitalize' variant='h5'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Details