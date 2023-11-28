import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exercisesRequestOptions, fetchExercises, youtubeRequestOptions } from '../utils/fetchExercises'
import Details from '../components/Details'
import Videos from '../components/Videos'
import Similar from '../components/Similar'

const ExersizeDetails = () => {
  const [exersiceDetails, setExersiceDetails] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetExercises, setTargetExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exersicedbUrl = 'https://exercisedb.p.rapidapi.com/exercises'
      const youtubedbUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exercizeDetailsData = await fetchExercises(`${exersicedbUrl}/exercise/${id}`, exercisesRequestOptions)
      setExersiceDetails(exercizeDetailsData)

      const exerciseVideoData = await fetchExercises(`${youtubedbUrl}/search?query=${exercizeDetailsData.name}`, youtubeRequestOptions)
      setExerciseVideos(exerciseVideoData.contents)

      const targetExercises = await fetchExercises(`${exersicedbUrl}/target/${exercizeDetailsData.target}`, exercisesRequestOptions)
      setTargetExercises(targetExercises)

      const equipmentExercises = await fetchExercises(`${exersicedbUrl}/equipment/${exercizeDetailsData.equipment}`, exercisesRequestOptions)
      setEquipmentExercises(equipmentExercises)
    }

    fetchExerciseData()
  }, [id])
  return (
    <Box>
      <Details exercisesDetailsData={exersiceDetails} />
      <Videos exerciseVideos={exerciseVideos} name={exersiceDetails.name} />
      <Similar targetExercises={targetExercises} equipmentExercises={equipmentExercises} />
    </Box>

  )
}

export default ExersizeDetails