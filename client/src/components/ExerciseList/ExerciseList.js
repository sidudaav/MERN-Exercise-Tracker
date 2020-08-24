import React from "react"

import styles from './ExerciseList.module.css'

import ExerciseBlock from '../ExerciseBlock/ExerciseBlock'


const ExerciseList = (props) => {
    const listExercises = (exercises) => {
        return exercises.map(exercise => {
            return <ExerciseBlock exercise={exercise} key={exercise._id} />
        })
    }
    return (
        <div className={styles.ExerciseList}>
            {listExercises(props.exercises)}
        </div>
    )
}

export default ExerciseList