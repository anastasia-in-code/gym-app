import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Pagination } from '@mui/material'

import { exercisesRequestOptions, fetchExercises } from '../utils/fetchExercises'
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)

  //pagination calculations
  const exercisePerPage = 9
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  useEffect(() => {
    const exercisesToShow = async () => {
      let exercisesToShow = [];
      if (bodyPart === 'all') {
        exercisesToShow = await fetchExercises('https://exercisedb.p.rapidapi.com/exercises?limit=100', exercisesRequestOptions)
      } else {
        exercisesToShow = await fetchExercises(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesRequestOptions)
      }
      setExercises(exercisesToShow)
    }
    exercisesToShow()
  }, [bodyPart])

  const handlePageChange = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1600, behavior: 'smooth' })
  }

  return (
    <Box id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'>
      <Typography variant='3h' mb='46px'>
        Try these:
      </Typography>
      <Stack direction="row" flexWrap='wrap' justifyContent='center'
        sx={{ gap: { lg: '110px', xs: '50px' } }}>
        {currentExercises.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} />)}
      </Stack>

      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 &&
          <Pagination count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage} onChange={handlePageChange} size='large' />
        }
      </Stack>
    </Box>
  )
}

export default Exercises