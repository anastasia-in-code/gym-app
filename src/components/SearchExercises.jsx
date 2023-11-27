import React, {useEffect, useState} from 'react'
import { Box, Typography, Stack, Button, TextField } from '@mui/material'

import {exercisesRequestOptions, fetchExercises} from '../utils/fetchExercises'
import HorizontalScrollBar from './HoriontalScrollBar'


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    let fetchBodyParts = async() =>  {
      const partsData = await fetchExercises('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesRequestOptions)
      setBodyParts(['all', ...partsData])
    }

    fetchBodyParts()
  }, [])

  const handleChange =(e) => setSearch(e.target.value.toLowerCase())

  const handleSearchClick = async( ) => {
    console.log(exercisesRequestOptions)
    if(search) {
      let data = await fetchExercises('https://exercisedb.p.rapidapi.com/exercises', exercisesRequestOptions)
      let targetExercises = data.filter(exercise => exercise.name.includes(search) ||
      exercise.bodyPart.includes(search) ||
      exercise.equipment.includes(search) ||
      exercise.target.includes(search)
      )
      setSearch('')
      setExercises(targetExercises)
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>

      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs:'30px'}}} mb='50px' textAlign='center'>
      Empower Your Workout Journey: <br/>Discover Essential Exercises to Elevate Your Fitness Routine
      </Typography>

      <Box position='relative' mb='72px'>
        <TextField 
        sx={{
          input: {fontWeight:'700', border: 'none', borderRadius: '20px'},
          width: {lg:'800px', xs: '350px'},
          backgroundColor: '#fff',
          borderRadius: '40px'
          
        }}
        height='76px'
        value={search}
        onChange={handleChange}
        placeholder='Search Exercises'
        />

        <Button  sx={{
          bgcolor: '#c60000',
          color: '#fff',
          textTransform: 'none',
          width: {lg:'175px', xs: '80px'},
          fontSize: {lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute',
          right:'0'
        }}
        onClick={handleSearchClick}
        className='search-btn'>Search</Button>

      </Box>
      <Box sx={{position: 'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollBar bodyPart={bodyPart} setBodyPart={setBodyPart} data={bodyParts} />
      </Box>
    </Stack>
  )
}

export default SearchExercises