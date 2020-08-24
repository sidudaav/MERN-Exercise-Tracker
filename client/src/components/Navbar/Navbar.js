import React from "react"
import { Link } from "react-router-dom"

import styles from './Navbar.module.css'

const Navbar = () => {
    return(
        <header>
            <Link to="/">
                <h3 className={styles.brand}>Exercise-Tracker</h3>
            </Link>
            <nav className={styles.navbar}>
                <ul className={styles.nav__links}>
                    <Link to="/view-exercises">
                        <li>View Exercises</li>
                    </Link>
                    <Link to="/add-exercise">
                        <li>Add Exercise</li>
                    </Link>
                </ul>
            </nav>
            <Link to="/add-user">
                <button className={styles.btn}>Add User</button>
            </Link>
        </header>
    )
}

export default Navbar