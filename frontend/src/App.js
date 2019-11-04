import React from 'react'
import './App.css'
import NavBar from './components/3-organisms/NavBar'
import Picture from './images/picture.jpg'

import Wave from './components/1-atoms/Wave'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import Clearwater from './images/clearwater.jpeg'
// import Innovation from './images/innovation.png'
// import Travelers from './images/travelers.jpeg'
//
function App () {
  return (
    <div>
      <NavBar />
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
              Developer with a passion to innovate. I love to code, read, hike,
              and my MacBook.
            </h4>
          </div>
        </center>
      </div>
      <div id='experience' />
      <Wave />
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        <center>
          <h1>Internships & Experiences</h1>
        </center>

        <div
          style={{
            backgroundColor: 'rgb(230,230,230)',
            width: '100%',
            borderRadius: '15px',
            padding: '15px',
            marginTop: '100px'
          }}
        >
          <Container>
            <Row>
              <Col>
                <h1
                  style={{
                    marginTop: '30px',
                    textAlign: 'center'
                  }}
                >
                  Innovation Labs
                </h1>
                <h5>
                  <strong>Head Software Engineer</strong>
                </h5>
                <p>Sep 2019 - Present</p>
                <ul>
                  <li>
                    Developed full-stack web applications for various clients
                    on-campus
                  </li>
                  <li>
                    Communicated with clients weekly for demos, feedback, and
                    new requirements
                  </li>
                  <li>
                    Worked in an agile environment that included weekly meetings
                    and retrospectives
                  </li>
                  <li>
                    Utilized React, JavaScript, NodeJS, Chart.js, D3.js, and
                    GraphQL
                  </li>
                  <li>
                    Focused primarily on developing an Energy Dashboard for The
                    Student Office of Sustainability
                  </li>
                </ul>
              </Col>
            </Row>

            <Row>
              <Col>
                <h1
                  style={{
                    marginTop: '30px',
                    textAlign: 'center'
                  }}
                >
                  Clearwater Labs
                </h1>
                <h5>
                  <strong>Software Engineer</strong>
                </h5>
                <p>Feb 2019 - Present</p>
                <ul>
                  <li>
                    Developed full-stack web applications for various local
                    clients
                  </li>
                  <li>
                    Worked in an agile environment that included weekly meetings
                    and retrospectives
                  </li>
                  <li>
                    Utilized React, JavaScript, NodeJS, JWT Tokens, Twillio, and
                    Socket.io
                  </li>
                  <li>Focused primarily on an outreach web application</li>
                </ul>
              </Col>
            </Row>

            <Row>
              <Col>
                <h1
                  style={{
                    marginTop: '30px',
                    textAlign: 'center'
                  }}
                >
                  Travelers Insurance
                </h1>
                <h5>
                  <strong>IT Intern</strong>
                </h5>
                <p>June 2019 - August 2019</p>
                <ul>
                  <li>
                    Helped develop a full-stack web application for automating
                    batch reports using React, Nest.Js, MySQL, and Java
                  </li>
                  <li>
                    Automated data retrieval for tasks that were manual with XML
                    and SQL Server Management for IBM Cognos Reports
                  </li>
                  <li>
                    Created an MVP for a Fraud Detection Platform using React
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default App
