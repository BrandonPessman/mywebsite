import React, { Component } from 'react';
import '../styling/App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';

class NavigationBar extends Component {
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: false
  };
}
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

render() {
  return (
    <div>
       <Navbar light expand="md">
       <NavbarBrand href="/">Brandon<strong>Pessman</strong></NavbarBrand>
       <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <NavItem>
               <NavLink href="/resume">Resume</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="/portfolio">Portfolio</NavLink>
             </NavItem>
             <NavItem>
               <NavLink href="/blog">Blog</NavLink>
             </NavItem>
             <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                 Projects
              </DropdownToggle>
              <DropdownMenu right>
               <DropdownItem>
                 steamInspector
               </DropdownItem>
               <DropdownItem>
                 svgLab
               </DropdownItem>
               <DropdownItem divider />
               <DropdownItem>
                 All Projects
               </DropdownItem>
              </DropdownMenu>
             </UncontrolledDropdown>
           </Nav>
         </Collapse>
       </Navbar>

       <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/blog' component={Blog} />
        <Redirect from='*' to='/' />
      </Switch>
     </div>
    );
  }
}

export default withRouter(NavigationBar);