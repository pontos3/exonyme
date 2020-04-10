import React from 'react';
import { Link } from "react-router-dom";
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
                <Navbar.Brand href="/countries">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/zones" className={"nav-link"}>Zone</Link>
                        <Link to="/countries" className={"nav-link"} >Country</Link>
                        <Link to="/towns" className={"nav-link"} >Town</Link>
                        <Link to="/locations" className={"nav-link"} >Locations</Link>
                        <Link to="/contact" className={"nav-link"} >Contact</Link>
                        <Link to="/about" className={"nav-link"} >About</Link>
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