import React from "react";
import { Link } from 'react-router-dom';
import { Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header = () =>
  <header>
    <div className="header-top">
      <Container fluid>
        <Row>
          <Col md={12}>
            <span className="warning">This site is intended for U.S. Healthcare Professionals only.</span>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="header-bottom">
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand className="navbar-logo-wrapper">
          <Nav.Link as={ Link } className="logo" to="/">
            <img src="/img/logo.png" alt="BMS logo" />
          </Nav.Link>
          <span className="header-at">at AACR 2021</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link as={ Link } to="/">
              <FontAwesomeIcon icon={ faHome } /> Home
            </Nav.Link>
            <Nav.Link as={ Link } to="/about-us/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
;

export default React.memo(Header);
