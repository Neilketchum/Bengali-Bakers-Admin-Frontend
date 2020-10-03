import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                         
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Sign Up</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Sign In
                    </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}
