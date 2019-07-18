import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title" />
                <p />
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title float-right">
                  <strong>Portal Access</strong>
                </h5>
                <br />
                <br />

                <a className="float-right" href="#!">
                  Login
                </a>
                <br />

                <a className="float-right" href="#!">
                  Register
                </a>
                <br />

                <a className="float-right" href="#!">
                  Account Management
                </a>
                <br />

                <a className="float-right" href="#!">
                  Forgot Password
                </a>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <a href="https://www.brandonpessman.com"> Brandon Pessman </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    )
  }
}
