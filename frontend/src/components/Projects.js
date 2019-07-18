import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
} from 'mdbreact'

import Example1 from '../images/example1.jpg'

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">My Projects</h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Here is a collection of projects that I have worked on or are
            currently being worked on. Feel free to give feedback, ask
            questions, or even contribute to my open-source projects.
          </p>

          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="indigo-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon fas icon="desktop" className="pr-2" />
                    Web Application
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">Steam Inspector</h4>
                <p>
                  A Web Application for performing Sentiment Analysis on Steam
                  game reviews and giving it a score based on that.
                </p>
                <MDBBtn color="indigo" rounded href="" target="_blank">
                  <MDBIcon icon="play" />
                </MDBBtn>
                <MDBBtn color="dark" rounded href="" target="_blank">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="indigo-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon icon="scroll" className="pr-2" />
                    Programming Language
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">SeeScript</h4>
                <p>
                  SeeScript is a programming language built with JavaScript that
                  allows you to programing scalable vector graphic animations in
                  a friendly way.
                </p>
                <MDBBtn color="dark" rounded href="" target="_blank">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="indigo-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon icon="desktop" className="pr-2" />
                    Web Application
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">Personal Website</h4>
                <p>This website was built by me.</p>
                <MDBBtn color="indigo" rounded href="" target="_blank">
                  <MDBIcon icon="play" />
                </MDBBtn>
                <MDBBtn color="dark" rounded href="" target="_blank">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="indigo-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon fab icon="discord" className="pr-2" />
                    Discord Bot
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">DrogonBot</h4>
                <p>
                  As my first attempt at making a Discord Bot, I made a
                  moderation bot inspired by 'Game of Thrones'.
                </p>
                <MDBBtn color="indigo" rounded href="" target="_blank">
                  <MDBIcon icon="play" />
                </MDBBtn>
                <MDBBtn color="dark" rounded href="" target="_blank">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </section>
      </div>
    )
  }
}
