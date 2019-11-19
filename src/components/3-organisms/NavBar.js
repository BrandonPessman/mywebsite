import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../5-pages/Landing'
import Experiences from '../5-pages/Experiences'
import Projects from '../5-pages/Projects'
import Blog from '../5-pages/Blog'

export default class NavBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isTop: true
    }
  }

  componentDidMount () {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 10
      if (isTop !== this.state.isTop) {
        this.setState({ isTop: isTop })
      }
    })
  }

  render () {
    return (
      <Router>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg={this.state.isTop ? 'dark' : ''}
          variant={this.state.isTop ? 'dark' : 'light'}
          fixed='top'
          style={{ transition: '.5s ease' }}
          className={this.state.isTop ? '' : 'light-theme'}
        >
          <Navbar.Brand href='/'>Brandon Pessman</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/experiences'>Internships & Experiences</Nav.Link>
              <Nav.Link href='/projects'>Projects</Nav.Link>
              <Nav.Link href='/blog'>Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='https://www.linkedin.com/in/brandonpessman/'>
                LinkedIn
              </Nav.Link>
              <Nav.Link href='https://github.com/brandonpessman'>
                GitHub
              </Nav.Link>
              <Nav.Link href='https://www.facebook.com/profile.php?id=100015092194651'>
                Facebook
              </Nav.Link>
              <Nav.Link href='mailto:pessmabm5831@uwec.edu'>Email</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/experiences'>
            <Experiences />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
        </Switch>
      </Router>
    )
  }
}
