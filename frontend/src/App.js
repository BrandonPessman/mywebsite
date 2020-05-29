import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'App.css'

import Navigation from 'components/Navigation/Navigation'
import Landing from 'pages/Landing/Landing'

function App () {
  return (
    <div>
      <Navigation />

      <Router>
        <Switch>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
