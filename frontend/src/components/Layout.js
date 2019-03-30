import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import { BrowserRouter } from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>
      </div>
    );
  }
}

export default Layout;
