import React from 'react'
import { Jumbotron, Col, Row, Container } from 'reactstrap'
import Picture from '../images/ProfileSquare.jpg'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <center>
            <img
              src={Picture}
              width="150"
              class="rounded-circle avatar"
              alt="Brandon Pessman"
            />
            <h2 className="display-4">Brandon Pessman</h2>
            <h4>
              A <span className="accent-text"> Full-Stack Web Developer</span>{' '}
              who likes to <em>make</em> and <em>break</em> things.
            </h4>
          </center>
        </Jumbotron>
        <Container>
          <Row>
            <Col xs="9">
              <h4>
                <strong>About Me</strong>
              </h4>
              <p>
                I love programming, gaming, hiking, and being with friends.
                Currently, I work at a local startup called{' '}
                <em> Clearwater Labs </em> in Eau Claire, Wisconsin. I am
                currently a student at the University of Wisconsin-Eau Claire,
                majoring in Computer Science. Through school, I have worked on
                two research projects. SVGScript is a programming language that
                allows for SVG animations. I am currently looking to rebuild
                this project into a node_module. My second big project is called
                Steam Inspector, which runs sentiment analysis on Steam game
                reviews and gives each game an aggregate score based on the
                sentiment. In my free time, I love working on personal projects
                and growing my knowledge as a full-stack web developer.
              </p>
            </Col>
            <Col xs="3">
              <h4>
                <strong>Contact</strong>
              </h4>
              <a href="/" target="_blank">
                LinkedIn
              </a>
              <br />
              <a href="/" target="_blank">
                GitHub
              </a>
              <br />
              <a href="/" target="_blank">
                Facebook
              </a>
              <br />

              <a href="/" target="_blank">
                Twitter
              </a>
              <br />

              <a href="/" target="_blank">
                Email
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
