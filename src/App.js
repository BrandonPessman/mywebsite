import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'

import Home from './components/Pages/Home'
import Post from './components/Pages/Post'

function App () {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App