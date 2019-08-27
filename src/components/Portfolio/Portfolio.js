import React, { Component } from 'react'
import Grid from './components/Grid'

export default class Portfolio extends Component {
  render() {
    return (
      <div style={{ marginTop: '80px' }}>
        <h1
          style={{
            color: 'white',
            textAlign: 'center',
            letterSpacing: '2px',
            fontWeight: '500',
          }}
        >
          Portfolio
        </h1>
        <Grid />
      </div>
    )
  }
}
