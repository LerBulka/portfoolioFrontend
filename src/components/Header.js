import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Content from './Content.js';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {

        const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated');

        return (
            <>
                <header>
                    <Navbar bg="white" expand="lg">
                        <Container>
                            <Navbar.Brand href="/"><img src="images/logo.png" alt="logo"></img></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" style={{flexGrow:0}}>
                                <Nav className="ms-auto" style={{textAlign:'right'}}>
                                    <Nav.Link href="/webdesign">Веб-дизайн</Nav.Link>
                                    <Nav.Link href="/schoolprojects">Учебные проекты</Nav.Link>
                                    <Nav.Link href="/graphic">Графический дизайн</Nav.Link>
                                    {isAdminAuthenticated && <Nav.Link href="/projecttable">Управление проектами</Nav.Link>}
                                    {isAdminAuthenticated && <Nav.Link href="/imagestable">Управление галереей</Nav.Link>}
                                    <Nav.Link href="/contacts">Контакты</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <div className="d-none d-lg-block">
                                <a href="https://wa.me/37253065565"><img style={{ marginRight: '10px' }} src="images/watsapp.png" alt="whatsapp"></img></a>
                                <a href="https://t.me/trestoros"><img style={{ marginRight: '10px' }} src="images/telegram.png" alt="telegram"></img></a>
                                <a href="https://www.facebook.com/valerijaze"><img style={{ marginRight: '10px' }} src="images/facebook.png" alt="facebook"></img></a>
                            </div>
                        </Container>
                    </Navbar>
                </header>
                <Content />
            </>
        )
    }
}
