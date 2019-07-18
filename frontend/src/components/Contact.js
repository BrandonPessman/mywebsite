import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from 'mdbreact'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Contact Me
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">
            Feel free to get in contact with me through this form or through my
            social media handles found in the top right. I'll be sure to get
            back to you as soon as possible.
          </p>
          <MDBRow>
            <MDBCol md="9" className="md-0 mb-5">
              <form>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="contact-name"
                        label="Your name"
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="contact-email"
                        label="Your email"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="contact-subject"
                        label="Subject"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="textarea"
                        id="contact-message"
                        label="Your message"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
              </form>
              <div className="text-center text-md-left">
                <MDBBtn color="indigo" size="md">
                  Send
                </MDBBtn>
              </div>
            </MDBCol>
            <MDBCol md="3" className="text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <MDBIcon
                    icon="map-marker-alt"
                    size="2x"
                    className="indigo-text"
                  />
                  <p>Eau Claire, Wisconsin, USA</p>
                </li>
                <li>
                  <MDBIcon
                    icon="phone"
                    size="2x"
                    className="indigo-text mt-4"
                  />
                  <p>None</p>
                </li>
                <li>
                  <MDBIcon
                    icon="envelope"
                    size="2x"
                    className="indigo-text mt-4"
                  />
                  <p>pessman.brandon@gmail.com</p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}
