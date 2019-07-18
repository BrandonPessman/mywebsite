import React from 'react'
import {
  Jumbotron,
  Col,
  Row,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap'
import Example1 from '../images/example1.jpg'

export default class Projects extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      popoverOpen: false,
    }
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    })
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <center>
            <h2 className="display-4">Projects</h2>
            <h4>“You can do anything you set your mind to.”</h4>
            <h4>- Benjamin Franklin</h4>
          </center>
        </Jumbotron>

        <Container>
          <center>
            <Row>
              <Col>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={Example1}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <center>
                      <hr />
                      <CardTitle>
                        <h4>SVGScript</h4>
                      </CardTitle>
                      <CardText>
                        SVGScript is a programming language for scalable vector
                        graphic animations. The plan for this project is to
                        build a node module that utlizes the language and a
                        embeded player to play the animations.
                      </CardText>
                    </center>
                    <Button color="primary">Demo</Button>{' '}
                    <Button color="secondary">GitHub</Button>{' '}
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={Example1}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <center>
                      <hr />
                      <CardTitle>
                        <h4>Steam Inspector</h4>
                      </CardTitle>
                      <CardText>
                        Steam Inspector is a Web Application built with React
                        that allows users to perform sentiment analysis on Steam
                        game reviews.
                      </CardText>
                    </center>
                    <Button color="primary">Demo</Button>{' '}
                    <Button color="secondary">GitHub</Button>{' '}
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={Example1}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <center>
                      <hr />
                      <CardTitle>
                        <h4>Personal Website</h4>
                      </CardTitle>
                      <CardText>
                        This website was built from scratch in order to show off
                        all I have to show. Its always going to be a work in
                        progress.
                      </CardText>
                    </center>
                    <Button color="primary">Demo</Button>{' '}
                    <Button color="secondary">GitHub</Button>{' '}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </center>
        </Container>
      </div>
    )
  }
}
