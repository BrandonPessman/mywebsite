import React, { Component } from 'react'
import NavBar from './NavBar'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Resume from './Resume/Resume'

import Container from '@material-ui/core/Container'

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <About />
          <Resume />
          <Portfolio />
        </Container>
      </div>
    )
  }
}

export default Home
