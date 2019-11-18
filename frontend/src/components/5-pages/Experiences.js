import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Experiences extends React.Component {
  render () {
    return (
      <div style={{ maxWidth: '800px', margin: 'auto', marginBottom: '30px' }}>
        <center>
          <h1>Internships & Experiences</h1>
        </center>

        <div
          style={{
            marginTop: '25px'
          }}
        >
          <Container>
            <Row
              style={{
                backgroundColor: 'rgb(230,230,230)',
                borderRadius: '15px',
                padding: '0 30px 30px 20px'
              }}
            >
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
                  <strong>Software Engineer</strong>
                </h5>
                <p>Sep 2019 - Present</p>
                <ul>
                  <li>
                    Developed full-stack web applications for various on-campus
                    organizations
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

            <Row
              style={{
                backgroundColor: 'rgb(230,230,230)',
                borderRadius: '15px',
                marginTop: '30px',
                padding: '0 30px 30px 20px'
              }}
            >
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

            <Row
              style={{
                backgroundColor: 'rgb(230,230,230)',
                borderRadius: '15px',
                marginTop: '30px',
                padding: '0 30px 30px 20px'
              }}
            >
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
    )
  }
}
