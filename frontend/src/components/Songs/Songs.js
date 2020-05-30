import React, { useEffect, useState } from 'react'

import ReactPlayer from 'react-player'
import styles from './Songs.module.sass'

import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import SoundImage from 'images/music.svg'

function Songs () {
  return (
    <div id='songs'>
      <svg
        viewBox='0 0 300 300'
        xmlns='http://www.w3.org/2000/svg'
        style={{ position: 'absolute', zIndex: '-1' }}
      >
        <path
          fill='#E2C2FF'
          d='M40.2,-60.5C52.3,-54.9,62.2,-43.9,64.8,-31.5C67.4,-19.2,62.8,-5.4,60.8,8.8C58.9,23,59.6,37.6,53.1,47.4C46.7,57.1,33.2,62.1,18.9,67.9C4.6,73.7,-10.5,80.4,-23.8,77.9C-37.1,75.4,-48.7,63.8,-53.8,50.6C-58.9,37.5,-57.5,22.8,-60.1,8.3C-62.7,-6.2,-69.4,-20.4,-67.9,-34C-66.4,-47.6,-56.8,-60.5,-44.1,-65.8C-31.4,-71,-15.7,-68.7,-0.8,-67.4C14.1,-66.2,28.2,-66,40.2,-60.5Z'
          transform='translate(30 80)'
        />
      </svg>
      <Container style={{ marginBottom: '50px', paddingTop: '100px' }}>
        <Row>
          <Col sm={6}>
            <img src={SoundImage} style={{ width: '100%' }} />
          </Col>
          <Col sm={6}>
            <h1 className={styles.header1}>Composer & Sound Designer</h1>
            <h2 className={styles.header2}>
              I create soundtracks for all sorts of situations
            </h2>
            <Button
              className={styles.hireButton}
              variant='primary'
              href='#contact'
            >
              Hire Me!
            </Button>
          </Col>
        </Row>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '600',
            marginBottom: '25px',
            marginTop: '100px'
          }}
        >
          Songs
        </h1>
        <Row>
          <Col sm={6}>
            <div>
              <iframe
                width='100%'
                height='166'
                scrolling='no'
                frameborder='no'
                allow='autoplay'
                src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/830838571&color=%238a00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
              ></iframe>
            </div>
          </Col>
          <Col sm={6}>
            <iframe
              width='100%'
              height='166'
              scrolling='no'
              frameborder='no'
              allow='autoplay'
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/830837863&color=%238a00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Songs
