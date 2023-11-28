import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exercisesRequestOptions, fetchExercises } from '../utils/fetchExercises'
import Details from '../components/Details'
import Videos from '../components/Videos'
import Similar from '../components/Similar'

const ExersizeDetails = () => {
  const [exersiceDetails, setExersiceDetails] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exersicedbUrl = 'https://exercisedb.p.rapidapi.com/exercises'
      const youtubedbUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exercizeDetailsData = await fetchExercises(`${exersicedbUrl}/exercise/${id}`, exercisesRequestOptions)
      console.log(exercizeDetailsData)
      setExersiceDetails(exercizeDetailsData)
    }

    fetchExerciseData()
  }, [id])
  return (
    <Box>
      <Details exercisesDetailsData={exersiceDetails}/>
      <Videos />
      <Similar />
    </Box>

  )
}

export default ExersizeDetails