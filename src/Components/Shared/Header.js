import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


export default function Header() {
    const [name, setName] = useState('Gem');

        return (
             <header id="header" className="header">
                <Navbar expand="lg" className="color-nav">
                <Container>
                    <Navbar.Brand href="#home" className="nav-text-solar">Randotizer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="nav-text-solar">Home</Nav.Link>
                        <Nav.Link href="#link" className="nav-text-solar">Link</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </header>
        )
}