import React from 'react'
import { Container } from 'reactstrap'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import axios from 'axios'

class HomePage extends React.Component {
  componentDidMount() {
    var data = {
      id: 1,
      title: 'Test Post',
      body: 'This is a test post with some information',
      date: Date.now(),
      image: 'n/a',
    }

    axios.post('http://localhost:8080/projects', {
      body: data,
    })
  }

  render() {
    return (
      <div>
        <ParallaxProvider>
          <Container>
            <h1> About </h1>
            <hr />
            <h1> Projects </h1>
            <hr />
            <h1> Blog </h1>
          </Container>
        </ParallaxProvider>
      </div>
    )
  }
}

export default HomePage
