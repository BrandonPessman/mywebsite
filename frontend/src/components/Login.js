import React from 'react'
import { Jumbotron, Col, Row, Container } from 'reactstrap'

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <center>
            <h2 className="display-4">Login</h2>
            <h4>Administration Access for the Website.</h4>
          </center>
        </Jumbotron>
      </div>
    )
  }
}
