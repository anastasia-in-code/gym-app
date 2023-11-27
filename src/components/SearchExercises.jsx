import React, {useEffect, useState} from 'react'
import { Box, Typography, Stack, Button, TextField } from '@mui/material'

import fetchExercises from '../utils/fetchExercises'


const SearchExercises = () => {
  const [search, setSearch] = useState('')
  const handleChange =(e) => setSearch(e.target.value.toLowerCase())

  const handleSearchClick =( ) => {
    if(search) {
      let data = fetchExercises()
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
    </Stack>
  )
}

export default SearchExercises