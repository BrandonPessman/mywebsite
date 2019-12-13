import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default class Login extends React.Component {
  render () {
    return (
      <div>
        <Container>
            <div style={{ margin: 'auto'}}>
                <Card style={{width: '300px', margin: '10% auto'}}>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                        <Button variant="primary" style={{marginBottom: '10px', width: '100%'}}>Login</Button>
                        <Button variant="danger" style={{marginBottom: '0px', width: '100%'}}>Forgot Password</Button>
                    </Card.Body>
                </Card>
                </div>
        </Container>
      </div>
    )
  }
}
