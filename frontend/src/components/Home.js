import React, {Component} from 'react';
import { MDBBtn,MDBAnimation } from "mdbreact";

class Home extends Component {
  render() {
    return (<div>
      <div className="homeBox">
        <center>
          <MDBAnimation type="fadeIn" delay=".25s" duration="1.5s">
            <h1>
              Hi, I'm Brandon.
            </h1>
            <h4>
              Front End Developer
            </h4>
          </MDBAnimation>

          <MDBAnimation type="fadeIn" delay="1.25s" duration="1.5s">
            <MDBBtn size="lg" color="primary" outline rounded>Learn More</MDBBtn>
          </MDBAnimation>
        </center>
      </div>
    </div>);
  }
}

export default Home
