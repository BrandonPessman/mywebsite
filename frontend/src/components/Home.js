import React from 'react'
import { Jumbotron, Col, Row, Container } from 'reactstrap'
import Picture from '../images/profilepic.jpg'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <center>
          <img
            src={Picture}
            className="img-fluid rounded-circle mypicture"
            alt=""
            width="300"
          />
        </center>
      </div>
    )
  }
}
