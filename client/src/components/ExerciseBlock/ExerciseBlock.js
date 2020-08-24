import React from "react"

import styles from './ExerciseBlock.module.css'

const ExerciseBlock = (props) => {
    return (
        <div className={styles.ExerciseBlock}>
            <h1 className={styles.username}>{props.exercise.username}</h1>
            <h2 className={styles.description}>{props.exercise.description}</h2>
            <h3 className={styles.duration}>{props.exercise.duration} minutes</h3>
        </div>
    )
}

export default ExerciseBlock