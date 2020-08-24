import React, { useState, useEffect } from "react"
import axios from "axios"

import ExerciseList from '../../components/ExerciseList/ExerciseList'

const ViewAllExercisesPage = () => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        getAllExercises()
    }, [])

    const getAllExercises = async () => {
        const allExercises = await axios.get('/exercises')
        setExercises(allExercises.data)
    }

    return (
        <ExerciseList exercises={exercises} />
    )
}

export default ViewAllExercisesPage