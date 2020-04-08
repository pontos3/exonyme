import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const AppHeader = (
    {
        title="test"
    }
    ) => {
    return (
        <header>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#zone">Zone</Nav.Link>
                        <Nav.Link active href="#country">Country</Nav.Link>
                        <Nav.Link active href="#town">Town</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#logout">
                            Philippe S : Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>

    );
}

export default AppHeader;