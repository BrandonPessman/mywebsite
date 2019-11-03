import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

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
      <Navbar
        collapseOnSelect
        expand='lg'
        bg={this.state.isTop ? 'dark' : ''}
        variant={this.state.isTop ? 'dark' : 'light'}
        fixed='top'
        style={{ transition: '.5s ease' }}
        className={this.state.isTop ? '' : 'light-theme'}
      >
        <Navbar.Brand href=''>Brandon Pessman</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#experience'>Internships & Experiences</Nav.Link>
            <Nav.Link href=''>Projects</Nav.Link>
            <Nav.Link href=''>Technologies</Nav.Link>
            <Nav.Link href=''>Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href=''>LinkedIn</Nav.Link>
            <Nav.Link href=''>GitHub</Nav.Link>
            <Nav.Link href=''>Facebook</Nav.Link>
            <Nav.Link href=''>Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
