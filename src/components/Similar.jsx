import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const Similar = ({ targetExercises, equipmentExercises }) => {
  return (
    <Box sx={{mt: {lg: '100px', xs:'0'}}}>
      <Typography variant='h4' mb={5}>Train the same muscle group</Typography>
      <Box direction='row' sx={{p:'2', position: 'relative'}}>
        {targetExercises.length ? <HorizontalScrollBar data={targetExercises}/> : <Loader/>}
      </Box>

      <Typography variant='h4' mb={5}>Train with the same equipment</Typography>
      <Box  sx={{ p:'2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollBar data={targetExercises}/> : <Loader/>}
      </Box>
    </Box>
  )
}

export default Similar