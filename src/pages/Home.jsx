import React, { useState } from 'react'
import { Box } from '@mui/system';
import HomeBanner from '../components/HomeBanner';
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises';


function Home() {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HomeBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home