import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const AppHeader = ({ title= "test" }) => {
    const { t } = useTranslation();
    return (
        <header>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/countries">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/zones" className={"nav-link"}>{t('navbar.zones')}</Link>
                        <Link to="/countries" className={"nav-link"} >{t('navbar.countries')}</Link>
                        <Link to="/towns" className={"nav-link"} >{t('navbar.towns')}</Link>
                        <Link to="/locations" className={"nav-link"} >{t('navbar.locations')}</Link>
                        <Link to="/contact" className={"nav-link"} >{t('navbar.contact')}</Link>
                        <Link to="/about" className={"nav-link"} >{t('navbar.about')}</Link>
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