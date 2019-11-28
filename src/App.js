import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'

import Home from './components/Pages/Home'
import Post from './components/Pages/Post'

function App () {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
        <Navbar.Brand href='/'>Brandon Pessman</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Blog</Nav.Link>
            <Nav.Link href='/'>Projects</Nav.Link>
            <Nav.Link href='/'>Technologies & Experiences</Nav.Link>
            {/* <NavDropdown title='Projects' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='/'></NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href='/'>New Post</Nav.Link>
            <Nav.Link href='/'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Router>
        <Switch>
          <Route path='/post/:id'>
            <Post />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
