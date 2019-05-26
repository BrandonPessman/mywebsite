import React from 'react'
import NavBar from './NavBar/NavBar'
import HomePage from './HomePage/HomePage'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <NavBar />

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={HomePage} />
            <Route path="/404" component={HomePage} />
            <Redirect from="*" to="/404" />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Layout
