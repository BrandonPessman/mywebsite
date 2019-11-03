import React from 'react'

export default class Wave extends React.Component {
  render () {
    return (
      <div>
        <div style={{ height: '150px', overflow: 'hidden' }}>
          <svg
            viewBox='0 0 500 150'
            preserveAspectRatio='none'
            style={{
              height: '100%',
              width: '100%'
            }}
          >
            <path
              d='M0.00,49.98 C179.46,291.61 274.26,-174.17 527.64,116.94 L500.00,0.00 L0.00,0.00 Z'
              style={{ stroke: 'none', fill: '#343a40' }}
            />
          </svg>
        </div>
      </div>
    )
  }
}

// style={height: '100%', width: '100%'}
