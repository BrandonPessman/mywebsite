import React from 'react'
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      content: []
    }
  }

  componentDidMount () {
    let state = this
    axios
      .get('http://localhost:8081/posts/')
      .then(function (response) {
        let data = response.data

        for (let i = data.length - 1; i >= 0; i--) {
          var ts = new Date(data[i].date)
          let post = (
            <div key={i}>
              <Card style={{ marginBottom: '10px' }}>
                <Card.Body>
                  <Card.Title>
                    <Card.Link href={'/post/' + data[i]._id}>
                      {data[i].title.toUpperCase()}
                    </Card.Link>
                  </Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    {ts.toDateString()}
                  </Card.Subtitle>
                  {/* <Card.Text>{data[i].body.substring(0, 300)}</Card.Text> */}
                  {/* <Card.Link href={'/post/' + data[i]._id}>Read More</Card.Link> */}
                </Card.Body>
              </Card>
            </div>
          )
          state.setState(prevState => ({
            content: [...prevState.content, post]
          }))
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })
  }

  render () {
    return (
      <div>
        <Jumbotron>
          <center>
            <h1>My Blog</h1>
            <h5>
              This is my corner of the internet for writing about the
              experiences I have and the things I learn along the way.
            </h5>
            {/* <p>
              <Button variant='primary'>Learn About Me</Button>
            </p> */}
          </center>
        </Jumbotron>
        <Container>
          <div>{this.state.content}</div>
        </Container>
      </div>
    )
  }
}
