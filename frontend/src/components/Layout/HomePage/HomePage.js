import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.grabBlogPosts = this.grabBlogPosts.bind(this)
    this.generateBlogPosts = this.generateBlogPosts.bind(this)

    this.grabProjects = this.grabProjects.bind(this)
    this.generateProjects = this.generateProjects.bind(this)
  }
  componentDidMount() {
    this.grabProjects()
    /* // This is for POSTING Data
        var data = {
      id: 1,
      title: 'Test Post',
      body: 'This is a test post with some information',
      date: Date.now(),
      image: 'n/a',
    }
    fetch('http://localhost:8080/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    })*/
  }

  grabProjects() {
    fetch('http://localhost:8080/projects', {
      method: 'GET',
    })
      .then(stream => {
        return stream.json()
      })
      .then(body => {
        this.generateProjects(body)
      })
  }

  grabBlogPosts() {}

  generateProjects(projects) {
    document.getElementById('projects')
    projects.forEach(p => {
      var cardElement = document.createElement('div')
      cardElement.className = 'card'

      var cardImgElement = document.createElement('div')
      cardImgElement.className = 'card-img-top'
      cardElement.appendChild(cardImgElement)

      var cardBodyElement = document.createElement('div')
      cardBodyElement.className = 'card-body'
      cardElement.appendChild(cardBodyElement)

      var cardTitleElement = document.createElement('h2')
      cardTitleElement.className = 'card-title'
      var cardTitleText = document.createTextNode('Steam Inspector')
      cardTitleElement.appendChild(cardTitleText)
      cardBodyElement.appendChild(cardTitleElement)

      var cardSubtitleElement = document.createElement('h5')
      cardSubtitleElement.className = 'card-subtitle'
      var cardSubtitleText = document.createTextNode('Spring 2018 - Fall 2019')
      cardSubtitleElement.appendChild(cardSubtitleText)
      cardBodyElement.appendChild(cardSubtitleElement)

      var cardTextElement = document.createElement('p')
      cardTextElement.className = 'card-text'
      var cardTextText = document.createTextNode('A Web Application')
      cardTextElement.appendChild(cardTextText)
      cardBodyElement.appendChild(cardTextElement)

      var cardGithubElement = document.createElement('button')
      cardGithubElement.className = 'btn btn-primary'
      var cardGithubText = document.createTextNode('Github')
      cardGithubElement.appendChild(cardGithubText)
      cardBodyElement.appendChild(cardGithubElement)

      var cardLiveElement = document.createElement('button')
      cardLiveElement.className = 'btn btn-primary'
      var cardLiveText = document.createTextNode('Live')
      cardLiveElement.appendChild(cardLiveText)
      cardBodyElement.appendChild(cardLiveElement)

      var element = document.getElementById('projects-spawn')
      element.appendChild(cardElement)
    })
  }

  generateBlogPosts() {}

  render() {
    return (
      <div>
        <ParallaxProvider>
          <Container>
            <h1 id="about"> About </h1>
            <hr />
            <h1 id="projects"> Projects </h1>
            <hr />
            <div id="projects-spawn" />
            <h1 id="blog"> Blog </h1>
          </Container>
        </ParallaxProvider>
      </div>
    )
  }
}

export default HomePage
