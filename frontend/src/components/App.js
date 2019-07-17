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
import Blog from './Blog'
import Projects from './Projects'
import Login from './Login'
import Footer from './Footer'

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
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">PROJECTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">BLOG</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ACCOUNT
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/login">LOGIN</DropdownItem>
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
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/login" component={Login} />
        </Router>

        <Footer />
      </div>
    )
  }
}
