import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Navbar from '../../components/Navbar/Navbar'
import ViewAllExercisesPage from '../ViewAllExercisesPage/ViewAllExercisesPage'
import HomePage from '../HomePage/HomePage'
import AddExercisePage from '../AddExercisePage/AddExercisePage'
import AddUserPage from '../AddUserPage/AddUserPage'

const App = () => {
  return(
    <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/view-exercises" component={ViewAllExercisesPage} />
            <Route path="/add-exercise" component={AddExercisePage} />
            <Route path="/add-user" component={AddUserPage} />
          </Switch>
        </div>
    </Router>
  )
}

export default App