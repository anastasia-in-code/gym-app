import React from 'react'
import { Box } from '@mui/system';
import HomeBanner from '../components/HomeBanner';
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises';


function Home() {
  return (
    <Box>
      <HomeBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home