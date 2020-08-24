import React, { useState, useEffect } from "react"
import axios from 'axios'

import styles from './AddExercisePage.module.css'

const AddExercisePage = () => {
    const [allUsers, setAllUsers] = useState([])
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const allUsers = await axios.get('/users')
        setAllUsers(allUsers.data)
    }

    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name === "username") {
            setUsername(value)
        } else if (name === "description") {
            setDescription(value)
        } else if (name === "duration") {
            setDuration(value)
        }
    }

    const addExercise = async (newExercise) => {
        axios.post('/exercises/add', newExercise)
        console.log('Exercise Added Successfully!')
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const allUsernames = allUsers.map(user => user.username)

        if (allUsernames.indexOf(username) < 0) {
            alert('Enter a valid username')
            return null
        } 

        const newExercise = {
            username: username,
            description: description,
            duration: parseFloat(duration)
        }

        addExercise(newExercise)

        setUsername('')
        setDescription('')
        setDuration('')
}

    return(
        <div className={styles.form__container}>
            <form className={styles.add__exercise__form} onSubmit={submitHandler}>
                <h1>Add Exercise</h1>
                <div className={styles.form__input__material}>
                    <input className={styles.form__control__material} onChange={changeHandler} type="text" name="username" id="username" value={username} autoComplete="off" required />
                    <label htmlFor="username">Username</label>
                </div>
                <div className={styles.form__input__material}>
                    <input className={styles.form__control__material} onChange={changeHandler} type="text" name="description" id="description" value={description} autoComplete="off" required />
                    <label htmlFor="description">Description</label>
                </div>
                <div className={styles.form__input__material}>
                    <input className={styles.form__control__material} onChange={changeHandler} type="number" name="duration" id="duration" value={duration} autoComplete="off" required />
                    <label htmlFor="duration">Duration</label>
                </div>
                <button className={styles.btn__submit} type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddExercisePage