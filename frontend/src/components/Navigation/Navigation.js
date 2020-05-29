import React from 'react'

import styles from './Navigation.module.sass'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function App () {
  return (
    <div>
      <Navbar
        className={styles.navigation}
        collapseOnSelect
        expand='lg'
        variant='light'
      >
        <Navbar.Brand className={styles.navigationTitle} href='/'>
          Brandon Pessman
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto' />
          <Nav>
            <Nav.Link className={styles.navigationLink} href='#'>
              About
            </Nav.Link>
            <Nav.Link className={styles.navigationLink} href='#'>
              Projects
            </Nav.Link>
            <Nav.Link className={styles.navigationLink} href='#'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <svg
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.blob}
      >
        <path
          fill='#FFF0E6'
          d='M12.7,-29.9C17.6,-19.2,23.3,-18,36.2,-14.6C49.1,-11.2,69.2,-5.6,65.9,-1.9C62.5,1.7,35.6,3.4,28.9,17.5C22.2,31.7,35.6,58.2,34.1,69.1C32.6,80,16.3,75.3,0.9,73.7C-14.5,72.1,-29,73.7,-34.3,65C-39.6,56.3,-35.6,37.3,-44.1,24.8C-52.6,12.2,-73.5,6.1,-80.8,-4.2C-88,-14.5,-81.7,-29,-68.7,-33.7C-55.6,-38.4,-35.9,-33.2,-23.4,-39.4C-10.8,-45.7,-5.4,-63.3,-0.7,-62C3.9,-60.7,7.9,-40.6,12.7,-29.9Z'
          transform='translate(180 20)'
        />
      </svg>
    </div>
  )
}

export default App
