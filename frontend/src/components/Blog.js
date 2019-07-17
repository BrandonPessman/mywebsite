import React from 'react'
import { Jumbotron, Col, Row, Container } from 'reactstrap'

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <center>
            <h2 className="display-4">Blog</h2>
            <h4>
              A place for me to dump my ideas, thoughts, and dreams in one
              collection location.
            </h4>
          </center>
        </Jumbotron>
      </div>
    )
  }
}
