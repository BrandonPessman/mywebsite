import React from 'react'

import styles from './Header.module.sass'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import HeaderImage from 'images/coding2.svg'

function Header () {
  return (
    <div>
      <Container className={styles.container}>
        <Row>
          <Col sm={6}>
            <h1 className={styles.header1}>Hi There!</h1>
            <h2 className={styles.header2}>
              I'm Brandon and I'm a Fullstack Web Developer.
            </h2>
            <Button className={styles.hireButton} variant='primary'>
              Hire Me!
            </Button>
          </Col>
          <Col sm={6}>
            <img src={HeaderImage} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header
