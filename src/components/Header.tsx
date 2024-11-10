import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

import { APP_NAME, ROUTES } from '../lib/constants'

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Link to={ROUTES.withoutTransitionExample} className="navbar-brand">
          {APP_NAME}
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={ROUTES.withoutTransitionExample} className="nav-link">
              Without Transition ❌
            </NavLink>

            <NavLink to={ROUTES.withTransitionExample} className="nav-link">
              With Transition ✅
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
