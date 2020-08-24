import React from "react"

import styles from './HomePage.module.css'

const HomePage = () => {
    return(
        <div>
            <div className={styles.description__container}>
                <h1>What Is This Web App?</h1>
                <p>
                    This is my first time ever deploing an application made with the MERN Stack! Soooooo, to keep things simple,
                    I built a simple exercise tracker! Feel free to track whatever exercises you used throughout the day!
                </p>
            </div>            
        </div>
    )
}

export default HomePage