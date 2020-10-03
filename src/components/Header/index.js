import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    
                    <Link className = "navbar-brand" to = '/'>Ecom Admin</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                         
                        </Nav>
                        <Nav>
                            <li className = "nav-item">
                            <NavLink className = "nav-link" to = '/signin'>
                                Sign In
                            </NavLink>
                            </li>
                            <li className = "nav-item">
                                <NavLink className = "nav-link" to = 'signup'>
                                    Sign Up
                                </NavLink>
                            </li>
                           
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}
