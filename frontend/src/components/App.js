import React from 'react'
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
  DropdownItem,
} from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Brandon Pessman</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">PROJECTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">BLOG</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">RESUME</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ACCOUNT
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>LOGIN</DropdownItem>
                  <DropdownItem>REGISTER</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>LOGOUT</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={Home} />
        </Router>
      </div>
    )
  }
}
