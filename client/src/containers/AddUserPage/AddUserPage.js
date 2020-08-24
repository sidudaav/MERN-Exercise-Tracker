import React, { useState, useEffect } from "react"

import axios from "axios"

import styles from './AddUserPage.module.css'

const AddUserPage = () => {
    const [allUsers, setAllUsers] = useState([])
    const [username, setUsername] = useState('')

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
        }
    }

    const addUser = async (newUser) => {
        axios.post('/users/add', newUser)
        console.log('User Added Successfully!')
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const allUsernames = allUsers.map(user => user.username)

        if (allUsernames.indexOf(username) > -1) {
            alert('Username already taken!')
            return null
        }

        if (username.length < 3) {
            alert('Username must be at least 3 characters long!')
            return null
        }

        const newUser = {
            username: username,
        }

        addUser(newUser)

        setUsername('')
}

    return (
        <div className={styles.form__container}>
        <form className={styles.add__exercise__form} onSubmit={submitHandler}>
            <h1>Add User</h1>
            <div className={styles.form__input__material}>
                <input className={styles.form__control__material} onChange={changeHandler} type="text" name="username" id="username" value={username} autoComplete="off" required />
                <label htmlFor="username">Username</label>
            </div>
            <button className={styles.btn__submit} type="submit">Add</button>
        </form>
    </div>
    )
}

export default AddUserPage