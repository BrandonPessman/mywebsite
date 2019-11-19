import React from 'react'

import Picture from '../.././images/picture.jpg'

import Wave from '../1-atoms/Wave'
import Image from 'react-bootstrap/Image'
import ContactMe from '../3-organisms/ContactMe'

export default class Landing extends React.Component {
  render () {
    return (
      <div>
        <div
          style={{
            backgroundColor: '#343a40',
            marginTop: '50px',
            paddingBottom: '100px',
            color: 'white'
          }}
        >
          <center>
            <Image
              src={Picture}
              style={{
                width: '250px',
                marginTop: '50px',
                boxShadow: '0 3px 2px rgba(0, 0, 0, 0.9)',
                borderRadius: '50em',
                border: '5px solid #eee',
                marginBottom: '50px'
              }}
              roundedCircle
            />

            <h1
              style={{
                background: '-webkit-linear-gradient(#f2d280, #856f38)',
                fontSize: '90px',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent'
              }}
            >
              Brandon Pessman
            </h1>

            <div style={{ maxWidth: '800px' }}>
              <h4 style={{ fontWeight: '300', lineHeight: '26pt' }}>
                Welcome to my space of the internet! I'm a Full-Stack Web
                Developer with a passion to innovate. I love to code, read,
                hike, and my MacBook.
              </h4>
            </div>
          </center>
        </div>
        <div id='experience' />
        <Wave />
        <div style={{ marginBottom: '100px', marginTop: '100px' }}>
          <center>
            <ContactMe />
          </center>
        </div>
      </div>
    )
  }
}
